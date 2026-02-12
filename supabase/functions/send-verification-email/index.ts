import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerificationEmailRequest {
  email: string;
  name?: string;
  verificationUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, verificationUrl }: VerificationEmailRequest = await req.json();

    console.log("Sending verification email to:", email);

    const emailResponse = await resend.emails.send({
      from: "LingoArab <noreply@lingoarab.com>",
      to: [email],
      subject: "تأكيد بريدك الإلكتروني - LingoArab",
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
                    <td style="background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">LingoArab</h1>
                      <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0; font-size: 16px;">تعلّم العربية بسهولة</p>
                    </td>
                  </tr>
                  
                  <!-- Body -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #1e293b; margin: 0 0 20px; font-size: 24px; text-align: center;">مرحباً ${name || 'بك'}! 👋</h2>
                      <p style="color: #64748b; font-size: 16px; line-height: 1.8; text-align: center; margin: 0 0 30px;">
                        شكراً لتسجيلك في LingoArab! لبدء رحلتك في تعلم اللغة العربية، يرجى تأكيد بريدك الإلكتروني بالنقر على الزر أدناه.
                      </p>
                      
                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="${verificationUrl}" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%); color: #ffffff; text-decoration: none; padding: 16px 48px; font-size: 18px; font-weight: bold; border-radius: 12px; box-shadow: 0 4px 16px rgba(14, 165, 233, 0.4);">
                              تأكيد البريد الإلكتروني ✉️
                            </a>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="color: #94a3b8; font-size: 14px; text-align: center; margin: 30px 0 0;">
                        إذا لم تقم بإنشاء حساب في LingoArab، يمكنك تجاهل هذا البريد.
                      </p>
                      
                      <p style="color: #94a3b8; font-size: 12px; text-align: center; margin: 20px 0 0;">
                        أو انسخ هذا الرابط: <br>
                        <span style="color: #0ea5e9; word-break: break-all;">${verificationUrl}</span>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 24px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                        © 2024 LingoArab. جميع الحقوق محفوظة.
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

    console.log("Verification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending verification email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
