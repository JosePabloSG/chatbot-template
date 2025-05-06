import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  input: string;
  onChange: (val: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export default function ChatInput({ input, onChange, onSend, disabled }: ChatInputProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-2 rounded-2xl bg-gray-800/50">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSend();
        }}
        className="relative flex items-center"
      >
        <Input
          value={input}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escribe tu mensaje..."
          disabled={disabled}
          aria-label="Escribe tu mensaje"
          className="pr-12 py-6 bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-100 placeholder:text-gray-500"
        />
        <Button
          type="submit"
          disabled={disabled || !input.trim()}
          className="absolute right-2 rounded-2xl w-10 h-10 p-0 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 cursor-pointer transition-all duration-200"
          aria-label="Enviar mensaje"
        >
          <ArrowUp className="w-5 h-5 text-gray-950" />
        </Button>
      </form>
    </div>
  );
}