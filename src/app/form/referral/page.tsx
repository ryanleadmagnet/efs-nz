"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/form-ui/button"
import { Input } from "@/components/form-ui/input"
import { Progress } from "@/components/form-ui/progress"
import { Card, CardContent } from "@/components/form-ui/card"
import { useRouter } from "next/navigation"

interface FormData {
  referrerName: string; referrerPhone: string; referralOwnership: string
  referralSuburb: string; referralName: string; referralPhone: string
}

const questions = [
  { id: "intro", type: "info", question: "Thrilled with your solar? Well by referring a friend or family member you will receive a $250 visa gift card once their solar has been installed.", buttonText: "Continue" },
  { id: "explanation", type: "info", question: "We will start by asking you a few questions just so we know who has given the referral and so we can organise your gift card when the time comes.", buttonText: "Continue" },
  { id: "referrerName", type: "text", question: "Can we please get your Full Name?", placeholder: "Your full name", validation: "required" },
  { id: "referrerPhone", type: "phone", question: "What is your best contact number?", placeholder: "0200 000 000", validation: "phone" },
  { id: "referralIntro", type: "info", question: "Now we just need a few contact details about the person you're referring.", buttonText: "Continue" },
  { id: "referralOwnership", type: "multiple", question: "Does this person Own or Rent their house?", caption: "This question is required.", options: ["Own", "Rent"] },
  { id: "referralSuburb", type: "text", question: "Which Suburb do they live in?", placeholder: "Suburb name", validation: "required" },
  { id: "referralName", type: "text", question: "What is their full name?", placeholder: "Their full name", validation: "required" },
  { id: "referralPhone", type: "phone", question: "What is their best contact number?", placeholder: "0200 000 000", validation: "phone" },
]

const formUrl = "https://script.google.com/macros/s/AKfycby2VQxNqAzXqzpS1f4y7yJKvZcqBfyiDYkm7SvnbORNWiTQC22C2t-Exc20Oej96IjvIg/exec"

export default function ReferralFormPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({ referrerName: "", referrerPhone: "", referralOwnership: "", referralSuburb: "", referralName: "", referralPhone: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => { setCurrentUrl(window.location.href) }, [])

  const validateField = (field: string, value: string): string => {
    if ((field === "referrerName" || field === "referralName" || field === "referralSuburb") && !value.trim()) return "This field is required"
    if ((field === "referrerPhone" || field === "referralPhone") && !/^\d{10}$/.test(value.replace(/\s/g, ""))) return "Please enter a valid 10-digit phone number"
    return ""
  }

  const handleMultipleChoice = (value: string) => {
    const q = questions[currentStep]
    if (q.id === "referralOwnership" && value === "Rent") { window.location.href = "/form/rejection"; return }
    setFormData((p) => ({ ...p, [q.id]: value }))
    setTimeout(() => {
      if (currentStep < questions.length - 1) setCurrentStep((p) => p + 1)
      else handleSubmit()
    }, 300)
  }

  const handleTextInput = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }))
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }))
  }

  const handleNext = () => {
    const q = questions[currentStep]
    if (q.type === "info") { if (currentStep < questions.length - 1) setCurrentStep((p) => p + 1); return }
    let hasError = false
    if (q.type === "text" || q.type === "phone") {
      const e = validateField(q.id, formData[q.id as keyof FormData])
      if (e) { setErrors((p) => ({ ...p, [q.id]: e })); hasError = true }
    }
    if (!hasError) {
      if (q.type === "phone" && currentStep === questions.length - 1) handleSubmit()
      else if (currentStep < questions.length - 1) setCurrentStep((p) => p + 1)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => { if (e.key === "Enter") handleNext() }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const base = { ...formData, referrerPhone: formData.referrerPhone.replace(/\s/g, ""), referralPhone: formData.referralPhone.replace(/\s/g, ""), url: currentUrl, timestamp: new Date().toISOString() }
      await fetch(formUrl, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(base) })
    } catch { /* continue */ }
    router.push("/form/referral-thank-you")
  }

  const progress = ((currentStep + 1) / questions.length) * 100
  const q = questions[currentStep]

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8"><Progress value={progress} className="h-2 [&>div]:bg-[#002e6e] bg-gray-300" /></div>
        <Card className="w-full bg-white border-1 border-gray-100">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl text-black font-rajdhani h-auto mb-12 font-semibold">{q.question}</h2>
            {q.caption && <p className="text-gray-600 text-sm mt-4 mb-8 font-raleway">{q.caption}</p>}

            {q.type === "info" && (
              <Button onClick={handleNext} className="w-full bg-[#002e6e] text-white font-bold rounded-lg hover:bg-[#003a7a] font-raleway text-lg py-6">
                {q.buttonText}
              </Button>
            )}

            {q.type === "multiple" && (
              <div className="space-y-4">
                {q.options?.map((opt, i) => (
                  <Button key={i} onClick={() => handleMultipleChoice(opt)} className="p-6 text-center justify-center bg-[#002e6e] text-white font-bold text-lg rounded-lg hover:bg-[#003a7a] font-raleway flex-col w-full my-1.5">{opt}</Button>
                ))}
              </div>
            )}

            {q.type === "text" && (
              <div className="space-y-4">
                <Input placeholder={q.placeholder} value={formData[q.id as keyof FormData]} onChange={(e) => handleTextInput(q.id, e.target.value)} onKeyPress={handleKeyPress} name={q.id} className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 focus:border-[#002e6e] font-raleway text-lg h-auto" />
                {errors[q.id] && <p className="text-red-500 text-sm font-raleway">{errors[q.id]}</p>}
                <Button onClick={handleNext} className="w-full bg-[#002e6e] text-white font-bold rounded-lg hover:bg-[#003a7a] font-raleway leading-7 text-lg py-6">Next</Button>
              </div>
            )}

            {q.type === "phone" && (
              <div className="space-y-4">
                <Input placeholder={q.placeholder} value={formData[q.id as keyof FormData]}
                  onChange={(e) => { let v = e.target.value.replace(/\D/g, ""); v = v.slice(0, 10); handleTextInput(q.id, v) }}
                  onKeyPress={handleKeyPress} name={q.id} className="bg-gray-50 border-gray-300 text-lg text-black placeholder:text-gray-500 focus:border-[#002e6e] font-raleway py-0 h-auto" />
                {errors[q.id] && <p className="text-red-500 text-sm font-raleway">{errors[q.id]}</p>}
                <Button onClick={handleNext} disabled={isSubmitting} className="w-full bg-[#002e6e] text-white font-bold rounded-lg hover:bg-[#003a7a] font-raleway text-lg py-6">
                  {isSubmitting ? "Submitting..." : currentStep === questions.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            )}

            {isSubmitting && (
              <div className="text-center mt-8">
                <div className="inline-flex items-center space-x-2 text-[#002e6e]">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#002e6e]"></div>
                  <span className="font-raleway">Submitting your referral...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
