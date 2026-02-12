import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactReplyRequest {
  messageId: string;
  recipientEmail: string;
  recipientName: string;
  originalSubject: string;
  replyMessage: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify admin authorization
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Missing authorization header");
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: { headers: { Authorization: authHeader } },
      }
    );

    // Check if user is admin
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      throw new Error("Unauthorized");
    }

    const { data: roleData } = await supabaseClient
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .single();

    if (!roleData) {
      throw new Error("Admin access required");
    }

    const { messageId, recipientEmail, recipientName, originalSubject, replyMessage }: ContactReplyRequest = await req.json();

    console.log("Sending reply to:", recipientEmail);

    const emailResponse = await resend.emails.send({
      from: "LingoArab Support <support@lingoarab.com>",
      to: [recipientEmail],
      subject: `رد: ${originalSubject}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%); padding: 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">LingoArab</h1>
                      <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0; font-size: 14px;">فريق الدعم</p>
                    </td>
                  </tr>
                  
                  <!-- Body -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #1e293b; margin: 0 0 20px; font-size: 20px;">مرحباً ${recipientName}! 👋</h2>
                      
                      <p style="color: #475569; font-size: 15px; line-height: 1.8; margin: 0 0 20px;">
                        شكراً لتواصلك معنا. إليك ردنا على رسالتك:
                      </p>
                      
                      <!-- Reply Content -->
                      <div style="background-color: #f8fafc; border-right: 4px solid #0ea5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="color: #334155; font-size: 15px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${replyMessage}</p>
                      </div>
                      
                      <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 30px 0 0;">
                        إذا كان لديك أي استفسارات إضافية، لا تتردد في التواصل معنا مرة أخرى.
                      </p>
                      
                      <p style="color: #64748b; font-size: 14px; margin: 20px 0 0;">
                        مع تحياتنا،<br>
                        <strong style="color: #0ea5e9;">فريق LingoArab</strong>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 24px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                        © 2024 LingoArab. جميع الحقوق محفوظة.
                      </p>
                      <p style="color: #94a3b8; font-size: 11px; margin: 10px 0 0;">
                        <a href="https://lingoarab.com" style="color: #0ea5e9; text-decoration: none;">lingoarab.com</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log("Reply email sent successfully:", emailResponse);

    // Mark the original message as read
    const serviceClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    await serviceClient
      .from("contact_messages")
      .update({ is_read: true })
      .eq("id", messageId);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending reply email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
