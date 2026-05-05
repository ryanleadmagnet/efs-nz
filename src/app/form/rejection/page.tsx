import { Card, CardContent } from "@/components/form-ui/card"

export default function RejectionPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4">
          <Card className="w-full max-w-2xl bg-white border-0 shadow-md">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#002e6e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 5a7 7 0 110 14A7 7 0 0112 5z" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-rajdhani mb-4 text-black uppercase">Sorry!</h1>
                <p className="text-xl text-[#002e6e] font-raleway mb-6">
                  Unfortunately, you don't appear to meet the criteria at this time.
                </p>
              </div>
              <div className="text-black space-y-4 mb-8">
                <p className="text-gray-600 font-raleway">
                  Thank you for your interest in EFS Solar. We appreciate you taking the time to apply.
                </p>
                <p className="text-gray-600 font-raleway">
                  We encourage you to check back in the future as our requirements may change.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-8">
                <a 
                  href="https://www.efssolar.co.nz" 
                  target="_parent"
                  className="inline-flex items-center justify-center bg-[#002e6e] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#003a7a] transition-colors duration-300 font-raleway w-full md:w-auto"
                >
                  Back to Website
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
