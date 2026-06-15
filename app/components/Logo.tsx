export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M18 6 C18 6 26 12 26 18 C26 24 18 30 18 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}
