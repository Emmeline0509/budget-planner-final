export function Card({ children }) {
  return <div className="rounded-xl border bg-white p-4 shadow">{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}