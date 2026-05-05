import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="portfolio" className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Portfólio"
          title="Momentos que criamos juntos"
          subtitle="Uma amostra dos eventos que tivemos o prazer de tornar inesquecíveis."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-bege"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay com categoria */}
              <div className="absolute inset-0 bg-gradient-to-t from-marrom/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-off-white text-sm font-semibold bg-terracota/80 px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-marrom-light text-sm mt-8 opacity-70">
          Quer ver mais? Siga-nos no Instagram{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracota font-semibold hover:underline"
          >
            @mesaeafeto
          </a>
        </p>
      </div>
    </section>
  );
}
