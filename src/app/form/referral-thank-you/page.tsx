"use client"

import { Card, CardContent } from "@/components/form-ui/card"

export default function ReferralThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="w-full max-w-2xl">
        <Card className="w-full bg-white border-0">
          <CardContent className="p-8 text-center py-[32] px-[32]">
            <h1 className="text-3xl text-black font-rajdhani mb-8 md:text-3xl font-semibold">
              {"Thank you so much for submitting your referral!"}
            </h1>

            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-black font-rajdhani">What happens from here?</h2>

              <div className="space-y-4 font-raleway text-lg text-gray-700 ">
                <div className="flex items-start space-x-3">
                  <span className="font-bold text-[#000000] text-xl text-center">1.</span>
                  <p>We will make contact with your referral to discuss going solar.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="font-bold text-[#000000] text-xl text-center">2.</span>
                  <p>
                    Once we have installed solar on your referral's roof, we will contact you to organise delivery of
                    the $250 gift card.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
