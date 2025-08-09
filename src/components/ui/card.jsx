export function Card({ className = '', children }) {
  return <div className={`rounded-xl border bg-white shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ className = '', children }) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function CardTitle({ className = '', children }) {
  return <h3 className={`font-bold ${className}`}>{children}</h3>;
}

export function CardContent({ className = '', children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}


