import { Card, CardContent } from "@/components/form-ui/card"

export default function FormThankYouPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4">
          <Card className="w-full max-w-2xl bg-white border-0 shadow-md">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-rajdhani mb-4 text-black">Thank You!</h1>
                <p className="text-xl text-[#002e6e] font-raleway mb-6">
                  Your assessment has been submitted successfully
                </p>
              </div>
              <div className="text-black space-y-4">
                <p className="text-gray-600 font-raleway">
                  Our specialists will review your information and contact you within 24 hours to discuss next steps.
                </p>
                <p className="text-gray-600 font-raleway">
                  Keep an eye on your phone and email — we'll be in touch soon!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
