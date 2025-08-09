export function Button({ className = '', variant = 'solid', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition';
  const styles = variant === 'outline'
    ? 'border border-gray-300 text-gray-800 hover:bg-gray-50'
    : 'bg-primary text-white hover:bg-secondary';
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}


