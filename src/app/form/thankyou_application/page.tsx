import Image from "next/image"
import { Card, CardContent } from "@/components/form-ui/card"
import Script from 'next/script' // Import the Next.js Script component

export default function ThankYouPage() {
  const PIXEL_ID = '758602916444446'; // Define your Pixel ID here

  return (
    // We use a Fragment (<>) to return multiple elements at the root level
    <>
      {/* Meta Pixel Code for Lead Event */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'Lead');
        `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=Lead&noscript=1`}
        />
      </noscript>
      {/* End Meta Pixel Code */}

      <div className="min-h-screen relative overflow-hidden bg-transparent">
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}

          {/* Thank You Content */}
          <div className="flex-1 flex items-center justify-center px-4">
            <Card className="w-full max-w-2xl bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-bright-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold font-deca mb-4 text-black">Thank You!</h1>
                  <p className="text-xl text-bright-green font-deca mb-6">
                    Your application has been submitted successfully
                  </p>
                </div>

                <div className="text-black space-y-4">
                  <p className="text-gray-600">
                    We will contact you after reviewing your information.
                  </p>
                  <p className="text-gray-600">
                    Keep an eye on your phone and email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
