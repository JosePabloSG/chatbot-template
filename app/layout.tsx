import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import Chatbot from "@/components/chat-assistant/chat-assistant"
import { ReactQueryClientProvider } from "@/providers/query-provider"


export const metadata: Metadata = {
  title: "Plantilla de Chatbot IA | Vercel SDK + OpenAI",
  description: "Una plantilla para crear chatbots rápidamente con el SDK de Vercel y la API de OpenAI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="es">
        <body className={inter.className}>
          {children}
          <Chatbot />
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}
