import { useState, useEffect } from "react";

const hasRunOnce = new Set();

export default function TextCounter({ text, speed = 100, runOnceKey }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const key = runOnceKey ?? text;

  useEffect(() => {
    if (runOnceKey !== undefined && hasRunOnce.has(key)) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    if (runOnceKey !== undefined) hasRunOnce.add(key);

    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span style={{ display: "inline" }}>
      {displayed}
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: "3px",
            height: "0.85em",
            background: "currentColor",
            marginLeft: "3px",
            verticalAlign: "middle",
            animation: "blink 0.7s step-start infinite",
          }}
        />
      )}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
