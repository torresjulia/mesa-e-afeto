import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-marrom">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que nossos clientes dizem"
          subtitle="A melhor recompensa é ver a felicidade de quem confiou em nós."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-marrom-light/40 border border-marrom-light rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Estrelas */}
              <div className="flex gap-1" aria-label={`${testimonial.rating} de 5 estrelas`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-terracota-light text-lg" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* Texto */}
              <blockquote className="text-bege-light text-sm leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-2 border-t border-marrom-light">
                <div
                  className="w-10 h-10 rounded-full bg-terracota flex items-center justify-center text-off-white text-sm font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-off-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-bege opacity-60 text-xs">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
