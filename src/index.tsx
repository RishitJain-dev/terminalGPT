import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { useState } from "react";

function App() {
  const [promptdraft, setPromptdraft] = useState("");

  return (
    <box justifyContent="center" alignItems="center" gap={1} flexGrow={1}>
      <ascii-font font="tiny" text="TerminalGPT" />
      <text attributes={TextAttributes.DIM}>Ask me anything!</text>
      <box width={40} borderStyle="rounded" padding={0.1}>
        <input placeholder="ask me something..." onInput={setPromptdraft} focused />
      </box>
      <text>{promptdraft}</text>
    </box>
  );
}


const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);