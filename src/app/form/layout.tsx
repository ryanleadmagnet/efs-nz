import type React from "react"
import type { Metadata } from "next"

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
    <div className="form-shell" style={{ background: 'transparent', minHeight: '100vh' }}>
      <style>{`
        .form-shell, .form-shell * {
          box-sizing: border-box;
        }
        .form-shell input {
          font-size: 1rem;
          padding: 16px;
        }
        .form-shell .font-rajdhani {
          font-family: "Rajdhani", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        }
        .form-shell .font-raleway {
          font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        }
        /* Form-shell CSS variables for shadcn components */
        .form-shell {
          --background: #ffffff;
          --foreground: #0a0a0a;
          --card: #ffffff;
          --card-foreground: #0a0a0a;
          --primary: #0a0a0a;
          --primary-foreground: #fafafa;
          --secondary: #f5f5f5;
          --secondary-foreground: #0a0a0a;
          --muted: #f5f5f5;
          --muted-foreground: #737373;
          --accent: #f5f5f5;
          --accent-foreground: #0a0a0a;
          --destructive: #ef4444;
          --destructive-foreground: #ef4444;
          --border: #e5e5e5;
          --input: #e5e5e5;
          --ring: #b3b3b3;
          --radius: 0.625rem;
        }
      `}</style>
      {children}
    </div>
  )
}
