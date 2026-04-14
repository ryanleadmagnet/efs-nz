import type React from "react"
import type { Metadata } from "next"
import "./form.css"

export const metadata: Metadata = {
  title: "EFS Solar | Forms",
  description: "EFS Solar lead forms",
}

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="form-shell">
      {children}
    </div>
  )
}
