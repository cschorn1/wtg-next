# World Tour Guide

Portal de viagens feito com Next.js, React e TypeScript. A página inicial apresenta o projeto e a página de destinos exibe uma lista local de lugares para conhecer.

## Requisitos

- Node.js
- npm

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

```bash
npm run dev    # inicia o servidor de desenvolvimento
npm run lint   # executa o ESLint
npm run build  # cria a versão de produção
npm run start  # inicia o servidor de produção após o build
```

## Páginas e funcionalidades

- `/`: apresentação do portal, hero com imagem de fundo e link para destinos.
- `/destinos`: lista os destinos definidos em `src/lib/destinos.json`, renderizados com `.map()`.
- `/destinos/[slug]`: página individual de cada destino, gerada a partir do `slug` no JSON.
- O Header e o Footer são compartilhados entre as páginas pelo componente Layout.
- Os componentes e as páginas usam CSS Modules para manter seus estilos isolados.

## Organização principal

```text
public/
  images/                 # imagens dos destinos, hero e marca
src/
  app/
    components/
      CardDestino/        # card reutilizável de destino
      Footer/
      Grid/               # grade responsiva para os cards
      Header/
      Hero/               # hero da página inicial
      HeroDestino/        # hero da página de destinos
      Layout/             # Header, conteúdo da página e Footer
    destinos/
      [slug]/             # detalhes de um destino
      page.tsx            # rota /destinos
    layout.tsx            # layout raiz do Next.js
    page.tsx              # rota /
  lib/
    destinos.json         # dados locais dos destinos
  styles/
    globals.css           # estilos globais e tema
```

As imagens guardadas em `public/` são referenciadas a partir da raiz do site. Por exemplo, `public/images/bahia-do-sancho.jpg` é usado como `/images/bahia-do-sancho.jpg`.
