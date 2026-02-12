import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the client IP from headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const clientIp = forwardedFor?.split(',')[0]?.trim() || realIp || 'unknown';

    console.log('Detecting country for IP:', clientIp);

    // Use ip-api.com for free IP geolocation (no API key needed)
    const response = await fetch(`http://ip-api.com/json/${clientIp}?fields=status,countryCode,country`);
    const data = await response.json();

    console.log('IP API response:', data);

    if (data.status === 'success' && data.countryCode) {
      return new Response(
        JSON.stringify({ 
          country_code: data.countryCode.toLowerCase(),
          country_name: data.country 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );
    }

    // Default fallback
    return new Response(
      JSON.stringify({ country_code: 'us', country_name: 'United States' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error detecting country:', error);
    return new Response(
      JSON.stringify({ country_code: 'us', country_name: 'United States' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  }
});
