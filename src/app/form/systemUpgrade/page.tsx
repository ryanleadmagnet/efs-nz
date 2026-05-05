"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/form-ui/button"
import { Input } from "@/components/form-ui/input"
import { Progress } from "@/components/form-ui/progress"
import { Card, CardContent } from "@/components/form-ui/card"

interface FormData {
  firstName: string
  lastName: string
  address: string
  email: string
  contactNumber: string
}

const questions = [
  {
    id: "name",
    type: "name",
    question: "What's your first & last name?",
  },
  {
    id: "address",
    type: "text",
    question: "What is your address?",
    placeholder: "Your address",
  },
  {
    id: "email",
    type: "text",
    question: "What's your email address?",
    placeholder: "Your email address",
    validation: "email",
  },
  {
    id: "contactNumber",
    type: "phone",
    question: "What's your best contact number?",
    placeholder: "021 000 0000",
  },
]

export default function SystemUpgradePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    contactNumber: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const formUrl =
    "https://script.google.com/macros/s/AKfycbzo-XazYYSV2PFOeEZmJ6VpE-Ymms_viEsYyGOV6P8_RpmM0JQvIAZYOMhd9dtJYaIO/exec"

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address"
        }
        break
      case "contactNumber":
        const cleanNumber = value.replace(/\s/g, "")
        if (!/^\d{10}$/.test(cleanNumber)) {
          return "Please enter a valid 10-digit phone number"
        }
        break
      case "firstName":
      case "lastName":
      case "address":
        if (!value.trim()) {
          return "This field is required"
        }
        break
    }
    return ""
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
    let hasError = false

    if (currentQuestion.type === "text") {
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
    } else if (currentQuestion.type === "name") {
      const firstNameError = validateField("firstName", formData.firstName)
      const lastNameError = validateField("lastName", formData.lastName)

      if (firstNameError || lastNameError) {
        setErrors((prev) => ({
          ...prev,
          firstName: firstNameError,
          lastName: lastNameError,
        }))
        hasError = true
      }
    } else if (currentQuestion.type === "phone") {
      const error = validateField("contactNumber", formData.contactNumber)
      if (error) {
        setErrors((prev) => ({
          ...prev,
          contactNumber: error,
        }))
        hasError = true
      }
    }

    if (!hasError) {
      if (currentQuestion.type === "phone") {
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
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        email: formData.email,
        contactNumber: formData.contactNumber,
        submissionTime: new Date().toISOString(),
        formType: "System Upgrade",
      }

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      if (window.parent) {
        window.parent.location.href = "http://localhost:3000/thank-you"
      } else {
        window.location.href = "http://localhost:3000/thank-you"
      }
    } catch (error) {
      console.error("Submission error:", error)

      if (window.parent) {
        window.parent.location.href = "http://localhost:3000/thank-you"
      } else {
        window.location.href = "http://localhost:3000/thank-you"
      }
    }
  }

  const progress = ((currentStep + 1) / questions.length) * 100
  const currentQuestion = questions[currentStep]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <img src="/logorefer.svg" alt="EFS Solar" className="w-[200px] md:w-[250px] h-auto mx-auto mb-8" />
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2 [&>div]:bg-[#000000] bg-gray-300" />
        </div>

        <Card className="w-full bg-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl text-black font-rajdhani mb-4 font-semibold">
              {currentQuestion.question}
            </h2>

            {currentQuestion.type === "text" && (
              <div className="space-y-4">
                <Input
                  placeholder={currentQuestion.placeholder}
                  value={formData[currentQuestion.id as keyof FormData]}
                  onChange={(e) => handleTextInput(currentQuestion.id, e.target.value)}
                  onKeyPress={handleKeyPress}
                  name={currentQuestion.id}
                  className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 focus:border-[#000000] focus:ring-[#000000] font-raleway text-lg"
                />
                {errors[currentQuestion.id] && (
                  <p className="text-red-500 text-sm font-raleway">{errors[currentQuestion.id]}</p>
                )}
                <Button
                  onClick={handleNext}
                  className="w-full bg-[#000000] text-white font-bold py-4 rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway leading-7 text-lg"
                >
                  Next
                </Button>
              </div>
            )}

            {currentQuestion.type === "name" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => handleTextInput("firstName", e.target.value)}
                      onKeyPress={handleKeyPress}
                      name="firstName"
                      className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 focus:border-[#000000] focus:ring-[#000000] font-raleway text-lg"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1 font-raleway">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Input
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => handleTextInput("lastName", e.target.value)}
                      onKeyPress={handleKeyPress}
                      name="lastName"
                      className="bg-gray-50 border-gray-300 text-lg text-black placeholder:text-gray-500 focus:border-[#000000] focus:ring-[#000000] font-raleway"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1 font-raleway">{errors.lastName}</p>}
                  </div>
                </div>
                <Button
                  onClick={handleNext}
                  className="w-full bg-[#000000] text-white font-bold py-3 rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway text-lg"
                >
                  Next
                </Button>
              </div>
            )}

            {currentQuestion.type === "phone" && (
              <div className="space-y-4">
                <Input
                  placeholder={currentQuestion.placeholder}
                  value={formData.contactNumber}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "")
                    value = value.slice(0, 10)
                    handleTextInput("contactNumber", value)
                  }}
                  onKeyPress={handleKeyPress}
                  name="contactNumber"
                  className="bg-gray-50 border-gray-300 text-lg text-black placeholder:text-gray-500 focus:border-[#000000] focus:ring-[#000000] font-raleway"
                />
                {errors.contactNumber && <p className="text-red-500 text-sm font-raleway">{errors.contactNumber}</p>}
                <Button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="w-full bg-[#000000] text-white font-bold py-3 rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            )}

            {isSubmitting && (
              <div className="text-center mt-8">
                <div className="inline-flex items-center space-x-2 text-[#000000]">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#000000]"></div>
                  <span className="font-raleway">Submitting your information...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
