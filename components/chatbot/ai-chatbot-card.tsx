"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  "Tell me about your Android projects",
  "What technologies do you use?",
  "Show your experience",
  "What certifications do you have?",
];

// Lightweight markdown renderer — handles bold, bullets, and line breaks.
// No external library needed; keeps the bundle lean.
function MessageContent({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <span className="block space-y-1">
      {lines.map((line, i) => {
        const trimmed = line.trim();

        // Blank line → small spacer
        if (trimmed === "") {
          return <span key={i} className="block h-1" />;
        }

        // Bullet line: starts with *, -, or •
        const bulletMatch = trimmed.match(/^[*\-•]\s+(.*)/);
        if (bulletMatch) {
          return (
            <span key={i} className="flex gap-1.5">
              <span className="mt-[3px] shrink-0 opacity-60">•</span>
              <span>{renderInline(bulletMatch[1])}</span>
            </span>
          );
        }

        // Regular line
        return (
          <span key={i} className="block">
            {renderInline(trimmed)}
          </span>
        );
      })}
    </span>
  );
}

// Renders **bold** and *italic* inline tokens within a single line.
function renderInline(text: string): React.ReactNode {
  // Split on **bold** or *italic* markers
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export function AiChatbotCard() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Ask me anything about Ronit's projects, experience, skills, certifications and development journey.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Correctly placed on the messages container (not the header)
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const message = text || input;

    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <motion.section
      className="
        glass
        relative
        flex
        h-[520px]
        max-h-[calc(100svh-6rem)]
        sm:h-[540px]
        lg:h-[560px]
        flex-col
        overflow-hidden
        rounded-lg
        p-4
        sm:p-5
        lg:p-6
      "
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.25,
      }}
      aria-label="AI Portfolio Assistant"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Header */}
      <div
        className="
          relative
          flex
          items-center
          justify-between
          border-b
          border-border/60
          pb-4
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              grid
              h-10
              w-10
              place-items-center
              rounded-xl
              bg-muted
              text-foreground
            "
          >
            <Bot className="h-5 w-5" />
          </span>

          <div>
            <p className="font-semibold">
              Ronit AI Guide
            </p>

            <p className="text-xs text-muted-foreground">
              Online and Ready
            </p>
          </div>
        </div>

        <Sparkles className="h-5 w-5 text-primary" />
      </div>

      {/* Messages — ref correctly placed here for auto-scroll */}
      <div
        ref={messagesContainerRef}
        className="
          relative
          mt-4
          min-h-0
          flex-1
          overflow-y-auto
          space-y-3
          pr-2
        "
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user"
                ? `
                  ml-auto
                  max-w-[90%]
                  rounded-xl
                  bg-primary
                  px-4
                  py-2.5
                  text-sm
                  text-primary-foreground
                  sm:max-w-[80%]
                `
                : `
                  max-w-[90%]
                  rounded-xl
                  border
                  border-border/60
                  bg-muted/60
                  px-4
                  py-2.5
                  text-sm
                  sm:max-w-[85%]
                `
            }
          >
            {msg.role === "assistant" ? (
              <MessageContent content={msg.content} />
            ) : (
              msg.content
            )}
          </div>
        ))}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              max-w-[85%]
              rounded-xl
              border
              border-border/60
              bg-muted/60
              px-4
              py-3
              text-sm
            "
          >
            Thinking...
          </motion.div>
        )}
      </div>

      {/* Suggestions */}
      <div
        className="
          relative
          mt-4
          grid
          gap-2
          sm:grid-cols-2
        "
      >
        {suggestions.map((question) => (
          <button
            key={question}
            suppressHydrationWarning
            onClick={() => sendMessage(question)}
            disabled={loading}
            className="
              min-h-[50px]
              rounded-xl
              border
              border-border/70
              bg-background/35
              px-4
              py-2.5
              text-left
              text-xs
              transition-all
              duration-300
              hover:border-foreground/35
              hover:bg-background/50
              disabled:opacity-50
            "
          >
            {question}
          </button>
        ))}
      </div>

      {/* Input */}
      <div
        className="
          relative
          mt-4
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-border/70
          bg-background/35
          p-2
        "
      >
        <input
          suppressHydrationWarning
          aria-label="Ask AI assistant"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) =>
            e.key === "Enter" &&
            !loading &&
            sendMessage()
          }
          placeholder="Ask about Ronit's work..."
          className="
            flex-1
            bg-transparent
            px-3
            text-sm
            outline-none
            placeholder:text-muted-foreground
          "
        />

        <Button
          size="icon"
          onClick={() => sendMessage()}
          disabled={loading}
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </motion.section>
  );
}