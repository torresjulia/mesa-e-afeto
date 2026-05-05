"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  // Quando não scrollou: texto claro (sobre o Hero escuro)
  // Quando scrollou: texto escuro (sobre o fundo off-white)
  const isLight = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-off-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className={`font-serif text-2xl font-bold transition-colors duration-300 hover:text-terracota ${
            isLight ? "text-off-white" : "text-marrom"
          }`}
        >
          Mesa <span className="text-terracota-light">&</span> Afeto
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-terracota ${
                isLight ? "text-bege-light" : "text-marrom-light"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-terracota text-off-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-terracota-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <WhatsAppIcon />
          Solicitar orçamento
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isLight ? "bg-off-white" : "bg-marrom"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isLight ? "bg-off-white" : "bg-marrom"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isLight ? "bg-off-white" : "bg-marrom"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-off-white border-t border-bege px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-marrom-light hover:text-terracota font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-terracota text-off-white px-5 py-3 rounded-full text-sm font-semibold mt-2"
          >
            <WhatsAppIcon />
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
