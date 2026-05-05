# Mesa & Afeto

Landing page profissional para um buffet e empresa de eventos fictícia, desenvolvida como projeto de portfólio. O objetivo é demonstrar habilidades em desenvolvimento front-end moderno com foco em design sofisticado, experiência do usuário e boas práticas de código.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

## Sobre o projeto

A **Mesa & Afeto** é uma landing page de página única com scroll suave, pensada para transmitir aconchego, gastronomia artesanal e sofisticação. O design usa uma paleta de terracota, bege e off-white com tipografia elegante (Playfair Display + Lato).

### Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação impactante com gradiente quente, CTAs e indicadores de confiança |
| **Serviços** | Cards para casamentos, aniversários, formaturas e eventos corporativos |
| **Diferenciais** | 6 diferenciais do buffet com banner de destaque |
| **Portfólio** | Galeria de fotos em grid com overlay de categoria ao hover |
| **Depoimentos** | 3 avaliações de clientes em fundo escuro |
| **Contato** | Botão de WhatsApp, e-mail e horários de atendimento |

## Stack

- **[Next.js 16](https://nextjs.org/)** — App Router, Server Components por padrão
- **[React 19](https://react.dev/)** — apenas componentes com interatividade usam `"use client"`
- **[TypeScript 5](https://www.typescriptlang.org/)** — tipagem estrita em todo o projeto
- **[Tailwind CSS 4](https://tailwindcss.com/)** — paleta customizada via `@theme` no CSS (sem `tailwind.config.js`)
- **[next/font](https://nextjs.org/docs/app/api-reference/components/font)** — Playfair Display e Lato auto-hospedadas
- **[next/image](https://nextjs.org/docs/app/api-reference/components/image)** — otimização automática de imagens

## Estrutura de arquivos

```
src/
├── app/
│   ├── globals.css          # Paleta de cores via @theme (Tailwind v4)
│   ├── layout.tsx           # Fontes, metadata e html root
│   └── page.tsx             # Composição das seções
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Nav fixa, scroll-aware, menu mobile
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Differentials.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx       # 3 variantes: primary, outline, ghost
│       └── SectionTitle.tsx # Reutilizável, suporta tema claro e escuro
└── lib/
    └── data.ts              # Todos os textos e dados centralizados
```

## Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| `terracota` | `#C1694F` | CTAs, destaques, ícones |
| `terracota-dark` | `#A0522D` | Hover states |
| `terracota-light` | `#D4856E` | Detalhes sobre fundos escuros |
| `bege` | `#E8D5B7` | Bordas, fundos de cards |
| `bege-light` | `#F5ECD7` | Seções alternadas |
| `off-white` | `#FAF7F2` | Fundo principal |
| `marrom` | `#3D2B1F` | Textos principais, fundo escuro |
| `marrom-light` | `#6B4C3B` | Textos secundários |

## Como rodar

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
# Acesse http://localhost:3000

# Build de produção
npm run build
npm run start
```

## Decisões técnicas

**Tailwind v4 sem `tailwind.config.js`**
As cores customizadas ficam no `globals.css` dentro do bloco `@theme {}`. Não existe arquivo de configuração separado nesta versão.

**Server Components por padrão**
Apenas o `Header` usa `"use client"` (precisa de `useState` e `useEffect` para o scroll e o menu mobile). Todas as outras seções são Server Components, reduzindo o bundle de JavaScript enviado ao cliente.

**`next/image` com `remotePatterns`**
O Next.js 16 exige configuração explícita de domínios externos em `next.config.ts`. O campo `qualities` também é obrigatório nesta versão por razões de segurança.

**Header adaptativo**
A navbar detecta o scroll e alterna entre texto claro (sobre o Hero escuro) e texto escuro (sobre o fundo off-white), com transição suave de 300ms.

**Dados centralizados**
Todo o conteúdo textual fica em `src/lib/data.ts`, facilitando a adaptação do projeto para um cliente real sem precisar tocar nos componentes.

## Personalização para uso real

Para adaptar este projeto a um cliente real, edite apenas o arquivo `src/lib/data.ts`:

- `siteConfig` — nome, WhatsApp, e-mail e Instagram
- `services` — títulos, descrições e destaques dos serviços
- `differentials` — diferenciais do negócio
- `galleryImages` — substitua pelas fotos reais do cliente
- `testimonials` — depoimentos reais de clientes

---

Desenvolvido por [Julia Torres](https://github.com/torresjulia)
