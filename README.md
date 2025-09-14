# 🔎 Pokédex com Next.js + Tailwind

Bem-vindo(a) à **Pokédex WebApp**!  
Um projeto em **Next.js 13 (App Router)** que consome a [PokéAPI](https://pokeapi.co/) para exibir informações sobre pokémons e permitir buscas interativas.

---

## ✨ Funcionalidades

- 🔍 **Pesquisar Pokémon pelo nome** (com tratamento de erros)
- 📋 **Listagem inicial** com os 20 primeiros pokémons
- 🖼️ **Exibição de detalhes**: imagem, altura, peso e tipos
- 🎨 **Interface responsiva** com **TailwindCSS**
- ⚡ Renderização otimizada usando o App Router do Next.js

---

## 🛠️ Tecnologias Utilizadas

- [Next.js 13+](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [PokéAPI](https://pokeapi.co/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next Fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist Sans e Geist Mono)

---

## 📂 Estrutura de Pastas

```bash
.
├── app/
│   ├── layout.tsx        # Layout global (fonts, Header, etc.)
│   ├── page.tsx          # Página inicial da Pokédex
│
├── components/
│   └── Header.tsx        # Componente do header (barra de busca)
│
├── public/
│   ├── globe.svg
│   ├── window.svg
│   └── preview.png       # Screenshot para o README
│
├── styles/
│   └── globals.css       # Estilos globais
│
├── package.json
└── README.md
```
