import SectionTitle from "@/components/ui/SectionTitle";
import { differentials } from "@/lib/data";

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-bege-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Por que nos escolher"
          title="O que nos torna especiais"
          subtitle="Cada detalhe é pensado para que você viva o evento dos seus sonhos sem preocupações."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-lg font-bold text-marrom mb-2 group-hover:text-terracota transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-marrom-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner de destaque */}
        <div className="mt-16 bg-terracota rounded-2xl p-10 text-center text-off-white">
          <p className="font-serif text-2xl md:text-3xl font-bold mb-3">
            Mais de 200 eventos realizados com amor
          </p>
          <p className="text-bege-light opacity-90 max-w-xl mx-auto">
            Cada celebração é única para nós. Venha fazer parte dessa história.
          </p>
        </div>
      </div>
    </section>
  );
}
