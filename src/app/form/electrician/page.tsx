"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/form-ui/button"
import { Input } from "@/components/form-ui/input"
import { Progress } from "@/components/form-ui/progress"
import { Card, CardContent } from "@/components/form-ui/card"
import { useRouter } from "next/navigation"

interface FormData {
  location: string
  workType: string
  position: string
  cecAccreditation: string
  driversLicense: string
  workingAtHeights: string
  tools: string
  startDate: string
  firstName: string
  lastName: string
  email: string
  contactNumber: string
}

interface MarketingData {
  marketing_territory: string
  marketing_platform: string
  marketing_type: string
  marketing_creative: string
  marketing_hook: string
}

const questions = [
  {
    id: "location",
    type: "multiple",
    caption: "Please select the option that best describes your situation:",
    question: "Which location are you wanting to work in?",
    options: ["Hamilton", "Tauranga", "Wellington", "Auckland", "Christchurch", "Queenstown", "Dunedin", "Other"],
  },
  {
    id: "workType",
    type: "multiple",
    caption: "Please select the option that best describes your situation:",
    question: "What type of work are you looking for?",
    options: ["Full-time", "Part-time", "Casual"],
  },
  {
    id: "position",
    type: "multiple",
    caption: "",
    question: "Which of the following positions are you applying for?",
    options: ["Electrician", "Roofer/Installer", "Both electrician & Installer"],
  },
  {
    id: "cecAccreditation",
    type: "multiple",
    caption: "Can be obtained on a pay back system through company.",
    question: "Do you hold a CEC accreditation or be willing to obtain one?",
    options: ["Yes", "No"],
  },
  {
    id: "driversLicense",
    type: "multiple",
    caption: "Please select the option that best describes your situation:",
    question: "Do you hold a current drivers licence (manual)?",
    options: ["Yes", "No"],
  },
  {
    id: "workingAtHeights",
    type: "multiple",
    caption: "Can be obtained on a pay back system through company.",
    question: "Do you have a current Working at Heights Certification or will you be willing to obtain?",
    options: ["Yes", "No"],
  },
  {
    id: "tools",
    type: "multiple",
    caption: "Can be obtained on a pay back system through company.",
    question: "Do you have your own tools or a willingness to obtain them?",
    options: ["Yes", "No"],
  },
  {
    id: "startDate",
    type: "multiple",
    caption: "Please select the option that best describes your situation:",
    question: "If you're successful with this position when can you start?",
    options: ["Immediate", "1 Week", "2 Weeks", "3+ Weeks"],
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
    question: "What's your best email?",
    placeholder: "Your email address",
    validation: "email",
  },
  {
    id: "contactNumber",
    type: "phone",
    caption: "",
    question: "Last question. What's your best contact number?",
    placeholder: "0200 000 000",
    validation: "phone",
  },
]

export default function ElectricianPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    location: "",
    workType: "",
    position: "",
    cecAccreditation: "",
    driversLicense: "",
    workingAtHeights: "",
    tools: "",
    startDate: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  })
  const [marketingData, setMarketingData] = useState<MarketingData>({
    marketing_territory: "",
    marketing_platform: "",
    marketing_type: "",
    marketing_creative: "",
    marketing_hook: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const formUrl =
    "https://script.google.com/macros/s/AKfycbx_YzQ977Zp5QRZQSYPcOCWwntPPSUUd2o2PT3U8IoMcJuTzZ4bcKet5aCTuxmeakI4Sw/exec"

  useEffect(() => {
    // Extract marketing parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    setMarketingData({
      marketing_territory: urlParams.get("marketing_territory") || "",
      marketing_platform: urlParams.get("marketing_platform") || "",
      marketing_type: urlParams.get("marketing_type") || "",
      marketing_creative: urlParams.get("marketing_creative") || "",
      marketing_hook: urlParams.get("marketing_hook") || "",
    })
  }, [])

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
    }
    return ""
  }

  const handleMultipleChoice = (value: string) => {
    const currentQuestion = questions[currentStep]

    if (
      (currentQuestion.id === "cecAccreditation" && value === "No") ||
      (currentQuestion.id === "workingAtHeights" && value === "No") ||
      (currentQuestion.id === "tools" && value === "No")
    ) {
      window.location.href = "/form/rejection"
      return
    }

    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))

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

  const getLocationData = async () => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 2000)

      const ipResponse = await fetch("https://ipapi.co/json/", {
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      const ipData = await ipResponse.json()

      return {
        ip_address: ipData.ip || "",
        country: ipData.country_name || "",
        city: ipData.city || "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      }
    } catch (error) {
      return {
        ip_address: "",
        country: "",
        city: "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      }
    }
  }

  const getDeviceInfo = () => {
    return {
      device: navigator.userAgent,
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const formattedContactNumber = formData.contactNumber.startsWith("0")
        ? `+64${formData.contactNumber.slice(1)}`
        : `+64${formData.contactNumber}`

      sessionStorage.setItem("firstName", formData.firstName)
      sessionStorage.setItem("lastName", formData.lastName)
      sessionStorage.setItem("email", formData.email)
      sessionStorage.setItem("contactNumber", formattedContactNumber)

      const locationDataPromise = getLocationData()
      const deviceInfo = getDeviceInfo()

      const submissionData = {
        ...formData,
        contactNumber: formattedContactNumber,
        ...marketingData,
        system_time: new Date().toISOString(),
        ...deviceInfo,
      }

      try {
        const locationData = await Promise.race([
          locationDataPromise,
          new Promise((resolve) =>
            setTimeout(
              () =>
                resolve({
                  ip_address: "",
                  country: "",
                  city: "",
                  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
                }),
              1000,
            ),
          ),
        ])

        await fetch(formUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...submissionData,
            ...locationData,
          }),
        })
      } catch (error) {
        await fetch(formUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...submissionData,
            ip_address: "",
            country: "",
            city: "",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
          }),
        })
      }

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
    <div className="min-h-screen flex items-center justify-center p-4 bg-transparent">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 [&>div]:bg-[#000000] bg-gray-300" />
        </div>

        {/* Question Content */}
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
                  disabled={isSubmitting}
                  className="w-full bg-[#000000] text-white font-bold py-4 rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway leading-7 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Next"}
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
                      className="bg-gray-50 border-gray-300 text-lg text-black placeholder:text-gray-500 focus:border-[#000000] focus:ring-[#000000] font-raleway"
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
                  disabled={isSubmitting}
                  className="w-full bg-[#000000] text-white font-bold py-3 rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Next"}
                </Button>
              </div>
            )}

            {currentQuestion.type === "phone" && (
              <div className="space-y-4">
                <div className="flex">
                  <Input
                    placeholder={currentQuestion.placeholder}
                    value={formData.contactNumber}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "")
                      if (value.length > 0 && !value.startsWith("0")) {
                        value = "0" + value
                      }
                      value = value.slice(0, 10)
                      handleTextInput("contactNumber", value)
                    }}
                    onKeyPress={handleKeyPress}
                    name="contactNumber"
                    className="rounded-lg bg-gray-50 border-gray-300 text-lg text-black placeholder:text-gray-500 focus:border-[#000000] focus:ring-[#000000] font-raleway"
                  />
                </div>
                {errors.contactNumber && <p className="text-red-500 text-sm font-raleway">{errors.contactNumber}</p>}
                <Button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="w-full bg-[#000000] text-white font-bold py-3 rounded-lg hover:bg-[#222222] transition-colors duration-300 font-raleway text-lg"
                >
                  {isSubmitting ? "Submitting your assessment..." : "Submit"}
                </Button>
              </div>
            )}

            {isSubmitting && (
              <div className="text-center mt-8">
                <div className="inline-flex items-center space-x-2 text-[#000000]">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#000000]"></div>
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
