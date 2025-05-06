import { motion, AnimatePresence, Variants } from "framer-motion";
import ReactMarkdown from "react-markdown";

export interface ChatMessage {
  role: string;
  content: string;
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  messageVariants: Variants;
}

export default function ChatMessages({ messages, messageVariants }: ChatMessagesProps) {
  return (
    <AnimatePresence mode="wait">
      <ul className="space-y-4">
        {messages.map((msg, index) => (
          <motion.li
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={messageVariants}
          >
            <div
              role={msg.role === "user" ? "status" : "article"}
              className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${msg.role === "user"
                  ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-950"
                  : "bg-gray-800/50 text-gray-100"
                }`}
            >
              <ReactMarkdown>
                {msg.content}
              </ReactMarkdown>
            </div>
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
}