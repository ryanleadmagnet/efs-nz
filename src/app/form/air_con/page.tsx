"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/form-ui/button"
import { Input } from "@/components/form-ui/input"
import { Progress } from "@/components/form-ui/progress"
import { Card, CardContent } from "@/components/form-ui/card"

interface FormData {
  homeOwnership: string
  acType: string
  firstName: string
  lastName: string
  address: string
  contactNumber: string
}

const questions = [
  { id: "homeOwnership", type: "multiple", caption: "Please select the option that best describes your situation:", question: "Do you own the house you're wanting to install A/C on?", options: ["Yes", "No"] },
  { id: "acType", type: "multiple", caption: "Please select the type of air conditioning system:", question: "What type of A/C are you looking for?", options: ["Ducted", "Split System(s)"] },
  { id: "name", type: "name", caption: "", question: "What's your full name?", validation: "name" },
  { id: "address", type: "text", caption: "", question: "What's your address?", placeholder: "Your full address", validation: "address" },
  { id: "contactNumber", type: "phone", caption: "", question: "Last question. What's your best contact number?", placeholder: "0400 000 000", validation: "phone" },
]

const formUrl = "https://script.google.com/macros/s/AKfycbyBOIcgHWWE6S46sgA0tfhDv2QfivtHRn_zPeTp04-jP1iIVQPjC_v1D0FEKKd0oCNabA/exec"

export default function AirConFormPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({ homeOwnership: "", acType: "", firstName: "", lastName: "", address: "", contactNumber: "" })
  const [marketingData, setMarketingData] = useState({ marketing_territory: "", marketing_platform: "", marketing_type: "", marketing_creative: "", marketing_hook: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    setMarketingData({ marketing_territory: p.get("marketing_territory") || "", marketing_platform: p.get("marketing_platform") || "", marketing_type: p.get("marketing_type") || "", marketing_creative: p.get("marketing_creative") || "", marketing_hook: p.get("marketing_hook") || "" })
  }, [])

  const validateField = (field: string, value: string): string => {
    if (field === "address" && !value.trim()) return "Please enter your address"
    if (field === "contactNumber" && !/^0\d{9}$/.test(value.replace(/\s/g, ""))) return "Please enter a valid 10-digit mobile number starting with 0"
    if ((field === "firstName" || field === "lastName") && !value.trim()) return "This field is required"
    return ""
  }

  const handleMultipleChoice = (value: string) => {
    const q = questions[currentStep]
    if (q.id === "homeOwnership" && value === "No") { window.location.href = "/form/rejection"; return }
    setFormData((p) => ({ ...p, [q.id]: value }))
    setTimeout(() => { if (currentStep < questions.length - 1) setCurrentStep((p) => p + 1) }, 300)
  }

  const handleTextInput = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }))
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }))
  }

  const handleNext = () => {
    const q = questions[currentStep]; let hasError = false
    if (q.type === "text") { const e = validateField(q.id, formData[q.id as keyof FormData]); if (e) { setErrors((p) => ({ ...p, [q.id]: e })); hasError = true } }
    else if (q.type === "name") { const fe = validateField("firstName", formData.firstName); const le = validateField("lastName", formData.lastName); if (fe || le) { setErrors((p) => ({ ...p, firstName: fe, lastName: le })); hasError = true } }
    else if (q.type === "phone") { const e = validateField("contactNumber", formData.contactNumber); if (e) { setErrors((p) => ({ ...p, contactNumber: e })); hasError = true } }
    if (!hasError) { if (q.type === "phone") handleSubmit(); else if (currentStep < questions.length - 1) setCurrentStep((p) => p + 1) }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => { if (e.key === "Enter") handleNext() }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const formatted = formData.contactNumber.startsWith("0") ? `+61${formData.contactNumber.slice(1)}` : `+61${formData.contactNumber}`
      const device = { device: navigator.userAgent, screen_resolution: `${window.screen.width}x${window.screen.height}` }
      const base = { ...formData, contactNumber: formatted, ...marketingData, system_time: new Date().toISOString(), ...device }
      await fetch(formUrl, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(base) })
    } catch { /* continue */ }
    const redirect = "/thank-you"
    if (window.parent && window.parent !== window) window.parent.location.href = redirect
    else window.location.href = redirect
  }

  const progress = ((currentStep + 1) / questions.length) * 100
  const q = questions[currentStep]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-transparent">
      <div className="w-full max-w-2xl">
        <div className="mb-8"><Progress value={progress} className="h-2 [&>div]:bg-[#002e6e] bg-gray-300" /></div>
        <Card className="w-full bg-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black font-rajdhani mb-4">{q.question}</h2>
            {q.caption && <p className="text-gray-600 text-sm mt-4 mb-8 font-raleway">{q.caption}</p>}

            {q.type === "multiple" && (
              <div className="space-y-4">
                {q.options?.map((option, i) => (
                  <Button key={i} onClick={() => handleMultipleChoice(option)} className="p-6 text-center justify-center bg-[#002e6e] text-white font-bold text-lg rounded-lg hover:bg-[#003a7a] transition-colors duration-200 font-raleway flex-col w-full my-1.5">{option}</Button>
                ))}
              </div>
            )}

            {q.type === "text" && (
              <div className="space-y-4">
                <Input placeholder={q.placeholder} value={formData[q.id as keyof FormData]} onChange={(e) => handleTextInput(q.id, e.target.value)} onKeyPress={handleKeyPress} name={q.id} className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 focus:border-[#002e6e] focus:ring-[#002e6e] font-raleway text-lg" />
                {errors[q.id] && <p className="text-red-500 text-sm font-raleway">{errors[q.id]}</p>}
                <Button onClick={handleNext} className="w-full bg-[#002e6e] text-white font-bold py-4 rounded-lg hover:bg-[#003a7a] transition-colors duration-300 font-raleway leading-7 text-lg">Next</Button>
              </div>
            )}

            {q.type === "name" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First name" value={formData.firstName} onChange={(e) => handleTextInput("firstName", e.target.value)} onKeyPress={handleKeyPress} name="firstName" className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 focus:border-[#002e6e] focus:ring-[#002e6e] font-raleway text-lg" />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1 font-raleway">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Input placeholder="Last name" value={formData.lastName} onChange={(e) => handleTextInput("lastName", e.target.value)} onKeyPress={handleKeyPress} name="lastName" className="bg-gray-50 border-gray-300 text-lg text-black placeholder:text-gray-500 focus:border-[#002e6e] focus:ring-[#002e6e] font-raleway" />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1 font-raleway">{errors.lastName}</p>}
                  </div>
                </div>
                <Button onClick={handleNext} className="w-full bg-[#002e6e] text-white font-bold py-3 rounded-lg hover:bg-[#003a7a] transition-colors duration-300 font-raleway text-lg">Next</Button>
              </div>
            )}

            {q.type === "phone" && (
              <div className="space-y-4">
                <Input placeholder={q.placeholder} value={formData.contactNumber}
                  onChange={(e) => { let v = e.target.value.replace(/\D/g, ""); if (v.length > 0 && !v.startsWith("0")) v = "0" + v; v = v.slice(0, 10); handleTextInput("contactNumber", v) }}
                  onKeyPress={handleKeyPress} name="contactNumber" className="rounded-lg bg-gray-50 border-gray-300 text-lg text-black placeholder:text-gray-500 focus:border-[#002e6e] focus:ring-[#002e6e] font-raleway" />
                {errors.contactNumber && <p className="text-red-500 text-sm font-raleway">{errors.contactNumber}</p>}
                <Button onClick={handleNext} disabled={isSubmitting} className="w-full bg-[#002e6e] text-white font-bold py-3 rounded-lg hover:bg-[#003a7a] transition-colors duration-300 font-raleway text-lg">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            )}

            {isSubmitting && (
              <div className="text-center mt-8">
                <div className="inline-flex items-center space-x-2 text-[#002e6e]">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#002e6e]"></div>
                  <span className="font-raleway">Submitting your assessment...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
