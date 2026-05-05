interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
            light ? "text-bege" : "text-terracota"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-off-white" : "text-marrom"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-bege-light" : "text-marrom-light"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
