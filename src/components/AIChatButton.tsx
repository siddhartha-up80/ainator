import { useState } from "react";
import AIChatbox from "./AIChatbox";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setChatBoxOpen(true)}>
        <Bot size={20} className="mr-2" />
        AI Chat
      </Button>
      <AIChatbox open={chatBoxOpen} onclose={() => setChatBoxOpen(false)} />
    </>
  );
}
