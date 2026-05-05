"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/form-ui/button"
import { Input } from "@/components/form-ui/input"
import { Progress } from "@/components/form-ui/progress"
import { Card, CardContent } from "@/components/form-ui/card"

interface FormData {
  enquiryNature: string
  address: string
  complaintType: string
  firstName: string
  lastName: string
  email: string
  contactNumber: string
}

const questions = [
  {
    id: "enquiryNature",
    type: "multiple",
    caption: "Please select the option that best describes your enquiry:",
    question: "What is the nature of your enquiry?",
    options: [
      "I need to cancel / reschedule an appointment",
      "I'm wanting to put solar on my house / business",
      "I need some tech support",
      "I have a billing issue",
      "I'd like to make a complaint",
    ],
  },
  {
    id: "address",
    type: "text",
    caption: "",
    question: "", // Will be set dynamically based on previous answer
    placeholder: "Enter address",
    validation: "address",
  },
  {
    id: "complaintType",
    type: "multiple",
    caption: "Please select what your complaint relates to:",
    question: "What is the complaint in relation to?",
    options: ["Staff member", "Installation", "Support", "Other"],
  },
  {
    id: "name",
    type: "name",
    caption: "",
    question: "What's your first & last name?",
    validation: "name",
  },
  {
    id: "email",
    type: "text",
    caption: "",
    question: "What's your email address?",
    placeholder: "Your email address",
    validation: "email",
  },
  {
    id: "contactNumber",
    type: "phone",
    caption: "",
    question: "Last question. What's your best contact number?",
    placeholder: "021 000 0000",
    validation: "phone",
  },
]

export default function EnquiryPage(): React.JSX.Element {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    enquiryNature: "",
    address: "",
    complaintType: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const formUrl =
    "https://script.google.com/macros/s/AKfycbwWn17Z0KYphJLrkRijErUSuKlWi-hpJJh_mTIfM34ZzwutpMPmwmjK1aBLZVIW5pj4/exec"

  const getNextStep = (currentQuestionId: string, answer: string): number => {
    if (currentQuestionId === "enquiryNature") {
      if (answer === "I'd like to make a complaint") {
        return 2 // Go to complaint type question
      } else {
        return 1 // Go to address question
      }
    } else if (currentQuestionId === "address") {
      return 3 // Go to name question
    } else if (currentQuestionId === "complaintType") {
      return 3 // Go to name question
    }
    return currentStep + 1
  }

  const getAddressQuestion = (enquiryType: string): string => {
    switch (enquiryType) {
      case "I need to cancel / reschedule an appointment":
        return "What is the address you gave us for your appointment?"
      case "I'm wanting to put solar on my house / business":
        return "What is the address of the property you would like to install solar panels on?"
      case "I need some tech support":
      case "I have a billing issue":
        return "Can you please provide the address where we installed your solar panels?"
      default:
        return "Please provide the address:"
    }
  }

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
        if (!value.trim()) {
          return "This field is required"
        }
        break
      case "address":
        if (!value.trim()) {
          return "Address is required"
        }
        break
    }
    return ""
  }

  const handleMultipleChoice = (value: string) => {
    const currentQuestion = questions[currentStep]

    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))

    // Auto-advance to next question based on logic
    setTimeout(() => {
      const nextStep = getNextStep(currentQuestion.id, value)
      if (nextStep < questions.length) {
        setCurrentStep(nextStep)
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
      } else {
        const nextStep = getNextStep(currentQuestion.id, formData[currentQuestion.id as keyof FormData])
        if (nextStep < questions.length) {
          setCurrentStep(nextStep)
        }
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
      let emailRecipients = []

      switch (formData.enquiryNature) {
        case "I need to cancel / reschedule an appointment":
        case "I'm wanting to put solar on my house / business":
          emailRecipients = ["haydenb@efssolar.co.nz"]
          break
        case "I need some tech support":
        case "I have a billing issue":
          emailRecipients = ["support@efssolar.co.nz"]
          break
        case "I'd like to make a complaint":
          emailRecipients = ["haydenb@efssolar.co.nz", "support@efssolar.co.nz"]
          break
        default:
          emailRecipients = ["support@efssolar.co.nz"]
      }

      const submissionData = {
        enquiry_nature: formData.enquiryNature,
        address: formData.address,
        complaint_type: formData.complaintType,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        contact_number: formData.contactNumber,
        submission_time: new Date().toISOString(),
        email_recipients: emailRecipients, // Added email recipients to submission data
      }

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      // Redirect to external thank you page
      if (window.parent) {
        window.parent.location.href = "http://localhost:3000/thank-you"
      } else {
        window.location.href = "http://localhost:3000/thank-you"
      }
    } catch (error) {
      console.error("Submission error:", error)
      // Still redirect on error
      if (window.parent) {
        window.parent.location.href = "http://localhost:3000/thank-you"
      } else {
        window.location.href = "http://localhost:3000/thank-you"
      }
    }
  }

  const getTotalSteps = (): number => {
    if (formData.enquiryNature === "I'd like to make a complaint") {
      return 5 // enquiry -> complaint type -> name -> email -> phone
    }
    return 5 // enquiry -> address -> name -> email -> phone
  }

  const getCurrentStepForProgress = (): number => {
    if (formData.enquiryNature === "I'd like to make a complaint") {
      if (currentStep === 0) return 1
      if (currentStep === 2) return 2 // complaint type
      if (currentStep === 3) return 3 // name
      if (currentStep === 4) return 4 // email
      if (currentStep === 5) return 5 // phone
    } else {
      if (currentStep === 0) return 1
      if (currentStep === 1) return 2 // address
      if (currentStep === 3) return 3 // name
      if (currentStep === 4) return 4 // email
      if (currentStep === 5) return 5 // phone
    }
    return currentStep + 1
  }

  const progress = (getCurrentStepForProgress() / getTotalSteps()) * 100
  const currentQuestion = questions[currentStep]

  if (currentQuestion.id === "address") {
    currentQuestion.question = getAddressQuestion(formData.enquiryNature)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-transparent">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Progress value={progress} className="h-2 [&>div]:bg-[#000000] bg-gray-300" />
        </div>

        <Card className="w-full bg-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black font-rajdhani mb-4">{currentQuestion.question}</h2>
            {currentQuestion.caption && (
              <p className="text-gray-600 text-sm mt-4 mb-8 font-raleway">{currentQuestion.caption}</p>
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
                  <span className="font-raleway">Submitting your enquiry...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
