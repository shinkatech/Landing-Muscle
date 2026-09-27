# Forja Academia — landing page

React 19 + TypeScript + Tailwind CSS v4, com Vite.

## Rodar em localhost

Precisa do Node.js 20 ou mais novo (https://nodejs.org).

**Jeito fácil (Windows):** dê dois cliques em `iniciar.bat`. Na primeira vez ele instala as dependências e depois abre http://localhost:5173.

**Pelo terminal:**

```bash
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build` (sai na pasta `dist/`).

## Onde mexer

| O quê | Arquivo |
|---|---|
| Textos, preços, serviços, cidades, FAQ | `src/data/content.ts` |
| Cores e fontes (tema do Tailwind) | `src/index.css` (bloco `@theme`) |
| Cada seção | `src/components/*.tsx` |

## Fotos e vídeo

As fotos são de atletas reais do banco gratuito **Unsplash** (licença Unsplash: uso comercial liberado, sem necessidade de crédito) e carregam direto do CDN deles, então precisam de internet.

Para trocar por fotos próprias, coloque o arquivo em `public/images/` e troque a URL em `src/data/content.ts` pelo caminho local (ex.: `'/images/hero.jpg'`). Se alguma imagem não carregar, a página mostra um espaço reservado no lugar.

Vídeo do tour: `public/videos/tour.mp4`.

## Rodapé

Assinatura clicável "Desenvolvido por ShinkaTech" (https://www.shinkatech.com.br/), igual à do projeto GeekDom. O link fica em `developer` no `src/data/content.ts`.

## Interações

- Menu fixo que escurece ao rolar, destaca a seção atual e vira menu hambúrguer no celular
- Brilho do hero acompanha o mouse; cartões flutuando
- Números que contam ao aparecer na tela; seções surgem ao rolar
- Modal de vídeo (fecha com Esc ou clicando fora)
- Carrossel de serviços com setas, arrastar com o mouse, swipe no celular e barra de progresso
- Acordeão de diferenciais que troca a foto ao lado
- Planos com alternância mensal/anual e preço animado
- Mapa com tooltip por cidade e filtro por região
- FAQ em acordeão
- Formulário de aula grátis com máscara de WhatsApp e validação (ligue o envio ao seu CRM no `TODO` de `src/components/Cta.tsx`)
- Botão de voltar ao topo

## Observação

Números da academia (alunos, unidades, preços, avaliações, CNPJ, horários) são exemplos — troque pelos reais em `src/data/content.ts`. As informações de saúde (OMS 2020), o registro no CREF (Lei nº 9.696/1998) e o PAR-Q são reais.
