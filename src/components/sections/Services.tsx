import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="O que oferecemos"
          title="Serviços para cada celebração"
          subtitle="Do íntimo ao grandioso, criamos experiências gastronômicas que combinam com o seu momento especial."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-bege hover:shadow-md hover:border-terracota/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-bege-light rounded-xl flex items-center justify-center text-2xl group-hover:bg-terracota/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-marrom mb-2">
                    {service.title}
                  </h3>
                  <p className="text-marrom-light text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-block text-xs font-semibold text-terracota bg-terracota/10 px-3 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
