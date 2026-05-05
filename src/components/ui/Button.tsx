import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-terracota text-off-white hover:bg-terracota-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-terracota text-terracota hover:bg-terracota hover:text-off-white",
    ghost:
      "border-2 border-off-white text-off-white hover:bg-off-white hover:text-marrom",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
