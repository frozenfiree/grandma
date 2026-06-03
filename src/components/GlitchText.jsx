import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
const rand = () => CHARS[Math.floor(Math.random() * CHARS.length)];
const preserve = (ch) => ch === ' ' || /[.,!?'"()\-:;]/.test(ch);

const scramble = (text) =>
  text.split('').map((c) => (preserve(c) ? c : rand())).join('');

export default function GlitchText({ text, duration = 1000, delay = 0, trigger }) {
  const [display, setDisplay] = useState(() => scramble(text));
  const rafRef = useRef(null);

  useEffect(() => {
    const shouldRun = trigger === undefined || trigger === true;
    if (!shouldRun) return;

    // Reset to scrambled state first
    setDisplay(scramble(text));

    let cancelled = false;
    const letters = text.split('');
    const total = letters.length;
    const sliceMs = Math.max(duration / total, 1);
    const startAt = performance.now() + delay;

    const tick = (now) => {
      if (cancelled) return;

      if (now < startAt) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startAt;
      const resolved = Math.min(Math.floor(elapsed / sliceMs), total);

      setDisplay(
        letters.map((ch, i) => {
          if (preserve(ch)) return ch;
          if (i < resolved) return ch;
          return rand();
        }).join('')
      );

      if (resolved < total) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    // Small timeout so component is fully painted before animation starts
    const t = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, 50);

    return () => {
      cancelled = true;
      clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, text, duration, delay]);

  return (
    <span style={{
      display: 'inline',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',
      color: 'inherit',
    }}>
      {display}
    </span>
  );
}
