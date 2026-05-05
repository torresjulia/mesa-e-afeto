import { siteConfig } from "@/lib/data";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <footer className="bg-marrom text-bege-light">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Marca */}
          <div>
            <p className="font-serif text-2xl font-bold text-off-white mb-3">
              Mesa <span className="text-terracota-light">&</span> Afeto
            </p>
            <p className="text-sm leading-relaxed text-bege opacity-80">
              Gastronomia artesanal para momentos que ficam na memória. Cada
              evento é único, cada prato é feito com amor.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-off-white mb-4 text-sm tracking-widest uppercase">
              Navegação
            </p>
            <ul className="space-y-2 text-sm">
              {[
                ["Serviços", "#servicos"],
                ["Diferenciais", "#diferenciais"],
                ["Portfólio", "#portfolio"],
                ["Depoimentos", "#depoimentos"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-terracota-light transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="font-semibold text-off-white mb-4 text-sm tracking-widest uppercase">
              Fale conosco
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracota-light transition-colors flex items-center gap-2"
                >
                  📱 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-terracota-light transition-colors"
                >
                  ✉️ {siteConfig.email}
                </a>
              </li>
              <li className="text-bege opacity-70">
                📍 São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-marrom-light pt-6 text-center text-xs text-bege opacity-50">
          © {new Date().getFullYear()} Mesa & Afeto. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
