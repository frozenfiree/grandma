// Re-mounts on each navigation — gives a subtle "turn the page" fade-up
// transition site-wide. CSS-only; disabled under prefers-reduced-motion.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
