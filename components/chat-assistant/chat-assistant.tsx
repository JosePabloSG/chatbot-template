"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Importar Alert
import Image from "next/image";
import { MessageCircle, AlertCircle, Sparkles } from "lucide-react";
import ChatMessages, { ChatMessage } from "./components/messages";
import { useChatbot } from "@/hooks/use-chat-bot";
import ChatHeader from "./components/header";
import FAQSuggestions from "./components/suggestions";
import ChatInput from "./components/input";

const FAQ_QUESTIONS = [
  "¿Qué puedo preguntarte?",
  "¿Cuáles son los tipos de wallets y cuál es más seguro?",
  "¿Qué es DeFi y cómo funciona?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Nuevos estados para manejo de rate limit
  const [rateLimitError, setRateLimitError] = useState<{ message: string; retryAfter: number } | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const { mutate: sendMessage, isPending, isError } = useChatbot();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Actualizar contador de tiempo restante
  useEffect(() => {
    if (!rateLimitError) return;

    setTimeRemaining(rateLimitError.retryAfter);

    const intervalId = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setRateLimitError(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [rateLimitError]);

  const handleSend = () => {
    if (!input.trim() || rateLimitError) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    sendMessage(input, {
      onSuccess: (botMessage: ChatMessage) => {
        setIsTyping(false);
        setMessages((prev) => [...prev, botMessage]);
      },
      onError: (error: any) => {
        setIsTyping(false);

        // Manejo especial para errores de rate limit
        if (error.isRateLimit) {
          setRateLimitError({
            message: error.message,
            retryAfter: error.retryAfter
          });
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content:
                "Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.",
            },
          ]);
        }
        console.error("Error del chat:", error);
      },
    });
  };

  const handleDownloadChat = () => {
    const chatContent = messages
      .map((msg) => `${msg.role === "user" ? "Usuario" : "Bot"}: ${msg.content}`)
      .join("\n\n");

    const blob = new Blob([chatContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat-conversation.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      <section aria-label="Chatbot" className="fixed bottom-4 right-4">
        <Button
          aria-label="Abrir chat"
          className="relative rounded-full w-12 h-12 shadow-lg bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-600 hover:to-cyan-600 cursor-pointer transition-all duration-200"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        </Button>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className={`${isExpanded
            ? "sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] w-[90vw] shadow-none"
            : "w-full mr-0 mb-0 sm:w-[72vw] sm:mr-4 sm:mb-4 sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] shadow-none"
            } rounded-2xl !right-4 !left-auto !translate-x-0 transition-all duration-300 origin-right bg-gray-950 text-white border-gray-800`}
          hideCloseButton
        >
          <ChatHeader
            isExpanded={isExpanded}
            onDownload={handleDownloadChat}
            onClose={() => setIsOpen(false)}
            onToggleExpand={() => setIsExpanded(!isExpanded)}
          />

          <Card className="h-[60vh] overflow-y-auto p-4 space-y-4 shadow-none border-0 hide-scrollbar bg-gray-900/30">
            {messages.length > 0 || isTyping ? (
              <>
                <ChatMessages messages={messages} messageVariants={messageVariants} />
                {isTyping && (
                  <motion.div
                    aria-live="polite"
                    aria-label="Bot está escribiendo"
                    className="flex justify-start"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={messageVariants}
                  >
                    <div className="bg-gray-800/50 p-3 rounded-2xl flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                          animate={{ y: ["0%", "-50%", "0%"] }}
                          transition={{
                            duration: 0.6,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <article className="flex flex-col items-center justify-center h-full text-center">
                <div className="mb-8">
                  <figure className="inline-flex items-center justify-center w-12 h-12 mb-4">
                    <Sparkles
                      height={48}
                      width={48}
                      className="text-transparent"
                      style={{
                        stroke: 'url(#sparkles-gradient)',
                        strokeWidth: 1.5
                      }}
                    />
                    <svg width="0" height="0">
                      <linearGradient id="sparkles-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop stopColor="#34d399" offset="0%" />
                        <stop stopColor="#22d3ee" offset="100%" />
                      </linearGradient>
                    </svg>
                  </figure>
                  <h2 className="text-xl font-semibold mb-2">
                    Pregúntale cualquier cosa a nuestra IA
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Estoy aquí para ayudarte con tus consultas
                  </p>
                </div>
                <FAQSuggestions questions={FAQ_QUESTIONS} onSelect={setInput} />
              </article>
            )}
            <div ref={messagesEndRef} />
          </Card>

          {/* Alerta de Rate Limit */}
          {rateLimitError && (
            <Alert variant="destructive" className="mt-2 mb-2">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Límite de solicitudes excedido</AlertTitle>
              <AlertDescription>
                {rateLimitError.message} Tiempo restante: {timeRemaining} segundos.
              </AlertDescription>
            </Alert>
          )}

          <ChatInput
            input={input}
            onChange={setInput}
            onSend={handleSend}
            disabled={isPending || rateLimitError !== null} // Bloquear el botón si hay rate limit
          />

          {isError && !rateLimitError && (
            <p role="alert" className="text-destructive text-sm">
              Ocurrió un error al enviar tu mensaje. Por favor, inténtalo de nuevo.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}