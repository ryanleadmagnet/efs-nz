"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Progress } from "@/components/form-ui/progress"

interface SurveyData {
  initialInquiry: string
  salesExperience: string
  installationExperience: string
  additionalComments: string
  fname: string
  lname: string
  email: string
}

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [surveyData, setSurveyData] = useState<SurveyData>({
    initialInquiry: "",
    salesExperience: "",
    installationExperience: "",
    additionalComments: "",
    fname: "",
    lname: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Extract UTM parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setSurveyData((prev) => ({
      ...prev,
      fname: urlParams.get("fname") || "",
      lname: urlParams.get("lname") || "",
      email: urlParams.get("email") || "",
    }))
  }, [])

  const questions = [
    {
      id: "initialInquiry",
      question: "How would you rate your initial inquiry with EFS Solar? (5=Very good)",
      type: "rating" as const,
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: "salesExperience",
      question: "How would you rate the sales experience with your solar specialist?",
      type: "rating" as const,
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: "installationExperience",
      question: "How would you rate the installation experience ?",
      type: "rating" as const,
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: "additionalComments",
      question: `Thanks ${surveyData.fname || "for your time"}, if you have any additional comments on how we can improve as a company please leave them here.`,
      type: "text" as const,
      options: [],
    },
  ]

  const progress = ((currentStep + 1) / questions.length) * 100

  const handleRatingSelect = (value: string) => {
    const currentQuestion = questions[currentStep]
    setSurveyData((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))

    // Auto-advance to next question
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    }, 300)
  }

  const handleTextSubmit = async () => {
    setIsSubmitting(true)

    try {
      const submissionData = {
        ...surveyData,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      }

      console.log("[v0] Submitting survey data:", submissionData)

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxVD4UePRbuRbTUL_it9TOQlg9YhJ7za7rLFxKpBuSGUUKKnxeNivl5RphEOv4nfVb0DQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
          mode: "no-cors",
        },
      )

      console.log("[v0] Survey submitted successfully")

      // Redirect to external thank you page
      window.location.href = "/thank_feedback.html"
    } catch (error) {
      console.error("[v0] Error submitting survey:", error)
      alert("There was an error submitting your survey. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isSubmitting) {
      handleTextSubmit()
    }
  }

  const currentQuestion = questions[currentStep]

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-raleway">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <img src="/logorefer.svg" alt="EFS Solar" className="w-[200px] md:w-[250px] h-auto mx-auto mb-8" />
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 [&>div]:bg-[#000000] bg-gray-300" />
        </div>

        {/* Question Content */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-rajdhani text-black mb-8 text-balance font-semibold">
            {currentQuestion.question}
          </h1>

          {currentQuestion.type === "rating" ? (
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleRatingSelect(option)}
                  className="w-full p-4 text-lg font-medium text-white bg-[#000000] hover:bg-[#222222] rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#000000] focus:ring-offset-2"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <textarea
                value={surveyData.additionalComments}
                onChange={(e) => setSurveyData((prev) => ({ ...prev, additionalComments: e.target.value }))}
                onKeyPress={handleKeyPress}
                placeholder="Your comments (optional)..."
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-[#000000] focus:outline-none resize-none"
                rows={4}
              />
              <button
                onClick={handleTextSubmit}
                disabled={isSubmitting}
                className="w-full p-4 text-lg font-medium text-white bg-[#000000] hover:bg-[#222222] disabled:bg-gray-400 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#000000] focus:ring-offset-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Survey"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
