"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/form-ui/button"
import { Input } from "@/components/form-ui/input"
import { Progress } from "@/components/form-ui/progress"
import { Card, CardContent } from "@/components/form-ui/card"
import { useRouter } from "next/navigation"

interface FormData {
  referrerName: string
  referrerPhone: string
  referralOwnership: string
  referralSuburb: string
  referralName: string
  referralPhone: string
}

const questions = [
  {
    id: "intro",
    type: "info",
    question:
      "Thrilled with your solar? Well by referring a friend or family member you will receive a $250 visa gift card once their solar has been installed.",
    buttonText: "Continue",
  },
  {
    id: "explanation",
    type: "info",
    question:
      "We will start by asking you a few questions just so we know who has given the referral and so we can organise your gift card when the time comes.",
    buttonText: "Continue",
  },
  {
    id: "referrerName",
    type: "text",
    question: "Can we please get your Full Name?",
    placeholder: "Your full name",
    validation: "required",
  },
  {
    id: "referrerPhone",
    type: "phone",
    question: "What is your best contact number?",
    placeholder: "0200 000 000",
    validation: "phone",
  },
  {
    id: "referralIntro",
    type: "info",
    question: "Now we just need a few contact details about the person you're referring.",
    buttonText: "Continue",
  },
  {
    id: "referralOwnership",
    type: "multiple",
    question: "Does this person Own or Rent their house?",
    caption: "This question is required.",
    options: ["Own", "Rent"],
  },
  {
    id: "referralSuburb",
    type: "text",
    question: "Which Suburb do they live in?",
    placeholder: "Suburb name",
    validation: "required",
  },
  {
    id: "referralName",
    type: "text",
    question: "What is their full name?",
    placeholder: "Their full name",
    validation: "required",
  },
  {
    id: "referralPhone",
    type: "phone",
    question: "What is their best contact number?",
    placeholder: "0200 000 000",
    validation: "phone",
  },
]

export default function ReferralPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    referrerName: "",
    referrerPhone: "",
    referralOwnership: "",
    referralSuburb: "",
    referralName: "",
    referralPhone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [currentUrl, setCurrentUrl] = useState("")

  const formUrl =
    "https://script.google.com/macros/s/AKfycbxyzhJ5KdoaSyvUr48X6Dov-Vcb4DNE7Oo-liAMWMZYen5CVPfUShKo6cN5rwvck7wH/exec"

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "referrerName":
      case "referralName":
      case "referralSuburb":
        if (!value.trim()) {
          return "This field is required"
        }
        break
      case "referrerPhone":
      case "referralPhone":
        const cleanNumber = value.replace(/\s/g, "")
        if (!/^\d{10}$/.test(cleanNumber)) {
          return "Please enter a valid 10-digit phone number"
        }
        break
    }
    return ""
  }

  const handleMultipleChoice = (value: string) => {
    const currentQuestion = questions[currentStep]

    if (currentQuestion.id === "referralOwnership" && value === "Rent") {
      window.location.href = "/form/rejection"
      return
    }

    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))

    // Auto-advance to next question
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        handleSubmit()
      }
    }, 300)
  }

  const handleTextInput = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  const handleNext = () => {
    const currentQuestion = questions[currentStep]

    if (currentQuestion.type === "info") {
      // Info screens just advance
      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1)
      }
      return
    }

    let hasError = false

    if (currentQuestion.type === "text" || currentQuestion.type === "phone") {
      const field = currentQuestion.id
      const value = formData[field as keyof FormData]
      const error = validateField(field, value)

      if (error) {
        setErrors((prev) => ({
          ...prev,
          [field]: error,
        }))
        hasError = true
      }
    }

    if (!hasError) {
      if (currentQuestion.type === "phone" && currentStep === questions.length - 1) {
        handleSubmit()
      } else if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNext()
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const submissionData = {
        ...formData,
        referrerPhone: formData.referrerPhone.replace(/\s/g, ""),
        referralPhone: formData.referralPhone.replace(/\s/g, ""),
        url: currentUrl,
        timestamp: new Date().toISOString(),
      }

      console.log("[v0] Submitting referral data:", submissionData)

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      router.push("/referral-thank-you")
    } catch (error) {
      console.error("Submission error:", error)
      // Still redirect on error
      router.push("/referral-thank-you")
    }
  }

  const progress = ((currentStep + 1) / questions.length) * 100
  const currentQuestion = questions[currentStep]

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 [&>div]:bg-[#000000] bg-gray-300" />
        </div>

        {/* Question Content */}
        <Card className="w-full bg-white border-1 border-gray-100">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl text-black font-rajdhani h-auto mb-12 font-semibold">
              {currentQuestion.question}
            </h2>
            {currentQuestion.caption && (
              <p className="text-gray-600 text-sm mt-4 mb-8 font-raleway">{currentQuestion.caption}</p>
            )}

            {currentQuestion.type === "info" && (
              <Button
                variant="default"
                onClick={handleNext}
                className="w-full bg-[#000000] text-white font-bold rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway text-lg py-6"
              >
                {currentQuestion.buttonText}
              </Button>
            )}

            {currentQuestion.type === "multiple" && (
              <div className="space-y-4">
                {currentQuestion.options?.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleMultipleChoice(option)}
                    className="p-6 text-center justify-center bg-[#000000] text-white font-bold text-lg rounded-lg hover:bg-[#222222] transition-colors duration-200 font-raleway mx-[0] flex-col w-full my-1.5"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}

            {currentQuestion.type === "text" && (
              <div className="space-y-4">
                <Input
                  placeholder={currentQuestion.placeholder}
                  value={formData[currentQuestion.id as keyof FormData]}
                  onChange={(e) => handleTextInput(currentQuestion.id, e.target.value)}
                  onKeyPress={handleKeyPress}
                  name={currentQuestion.id}
                  className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 focus:border-[#000000] focus:ring-[#000000] font-raleway text-lg h-auto"
                />
                {errors[currentQuestion.id] && (
                  <p className="text-red-500 text-sm font-raleway">{errors[currentQuestion.id]}</p>
                )}
                <Button
                  onClick={handleNext}
                  className="w-full bg-[#000000] text-white font-bold rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway leading-7 text-lg py-6"
                >
                  Next
                </Button>
              </div>
            )}

            {currentQuestion.type === "phone" && (
              <div className="space-y-4">
                <Input
                  placeholder={currentQuestion.placeholder}
                  value={formData[currentQuestion.id as keyof FormData]}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "")
                    value = value.slice(0, 10)
                    handleTextInput(currentQuestion.id, value)
                  }}
                  onKeyPress={handleKeyPress}
                  name={currentQuestion.id}
                  className="bg-gray-50 border-gray-300 text-lg text-black placeholder:text-gray-500 focus:border-[#000000] focus:ring-[#000000] font-raleway py-0 h-auto"
                />
                {errors[currentQuestion.id] && (
                  <p className="text-red-500 text-sm font-raleway">{errors[currentQuestion.id]}</p>
                )}
                <Button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="w-full bg-[#000000] text-white font-bold rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway text-lg py-6"
                >
                  {isSubmitting ? "Submitting..." : currentStep === questions.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            )}

            {isSubmitting && (
              <div className="text-center mt-8">
                <div className="inline-flex items-center space-x-2 text-[#000000]">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#000000]"></div>
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
