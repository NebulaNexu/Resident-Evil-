# Projeto Resident Evil Portal

Uma fanpage moderna e imersiva dedicada ao universo de Resident Evil, desenvolvida com React para apresentar informações, personagens, histórias e conteúdos especiais dos jogos mais marcantes da franquia.

## Visão geral

Este projeto foi criado como uma experiência de portal/landing page para fãs da saga, com foco em:

- apresentação visual forte e temática
- navegação por jogos e páginas complementares
- destaque para personagens, histórias e conteúdos de cada título
- interface responsiva e com animações em scroll
- integração de mídia, vídeos e sons que reforçam a ambientação

O site inclui seções dedicadas a diversos jogos e páginas extras com bios e informações sobre personagens importantes.

## Status do projeto

- Resident Evil 0 HD Remaster: concluído
- Resident Evil 1 Remake: concluído
- Resident Evil 2 Remake: concluído
- Resident Evil 3 Remake: concluído
- Resident Evil 4 Classic: concluído
- Resident Evil 5: concluído
- Resident Evil 6: concluído
- Conteúdos extras e melhorias contínuas: em desenvolvimento

## Tecnologias utilizadas

- React
- React Router DOM
- JavaScript
- SCSS / CSS Modules
- AOS (Animate On Scroll)
- React Icons
- Swiper
- React Reveal
- React Scroll
- Web Vitals

## Estrutura do projeto

```bash
Projeto-Resident-Evil-Portal-master/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── index.js
│   ├── Routes/
│   ├── NextedRoutes/
│   ├── components/
│   ├── images/
│   ├── pages/
│   ├── videos/
│   ├── audios/
│   └── styles/
├── package.json
├── package-lock.json
├── jsconfig.json
├── .gitignore
└── README.md
```

## Funcionalidades principais

- página inicial com apresentação cinematográfica
- navegação por títulos da franquia
- páginas específicas para jogos e personagens
- animações de entrada e transições suaves
- uso de mídia de apoio para reforçar a estética do site
- experiência de fan portal com foco em imersão e nostalgia

## Pré-requisitos

Antes de executar o projeto, certifique-se de que você possui instalado:

- Node.js 16+ (recomendado 18/20)
- npm ou yarn
- Git

## Instalação

No diretório do projeto, execute:

```bash
npm install
```

Se o ambiente tiver problemas de compatibilidade de dependências, uma alternativa comum é:

```bash
npm install --legacy-peer-deps
```

## Execução em desenvolvimento

Para iniciar o site localmente:

```bash
npm start
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

## Build para produção

```bash
npm run build
```

Este comando gera a versão otimizada do projeto na pasta `build/` para deploy.

## Scripts disponíveis

No arquivo `package.json`, o projeto já inclui os seguinte scripts:

```json
"scripts": {
  "start": "NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
  "build": "NODE_OPTIONS=--openssl-legacy-provider react-scripts build",
  "test": "NODE_OPTIONS=--openssl-legacy-provider react-scripts test",
  "eject": "react-scripts eject"
}
```

A variável `NODE_OPTIONS=--openssl-legacy-provider` foi incluída para evitar problemas de compatibilidade em alguns ambientes com versões mais recentes do Node.js.

## Observações importantes

- O projeto é uma fanpage/portal não oficial, criada como homenagem à franquia.
- Há conteúdos audiovisuais e imagens que podem depender de permissões do navegador para reprodução.
- Em alguns navegadores, vídeos e áudio podem exigir desbloqueio manual na primeira execução.
- Em dispositivos móveis, pode ser necessário alternar para visualização desktop ou girar a tela para melhor experiência.

## Deploy

O portal já esteve publicado em ambientes de hospedagem estática e pode ser implantado em plataformas como:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Como contribuir

Se você quiser colaborar com o projeto:

1. faça um fork do repositório
2. crie uma branch para sua funcionalidade ou correção
3. implemente suas alterações
4. abra um pull request com descrição clara

## Licença e uso

Este projeto é desenvolvido com fins educativos e de entretenimento, voltado à comunidade de fãs do universo de Resident Evil. Não possui vínculo oficial com a Capcom, mas busca celebrar a franquia com respeito e paixão.

## Agradecimentos

Agradecimento especial à comunidade de fãs, jogadores e desenvolvedores que continuam valorizando e expandindo esse universo com criatividade e dedicação.

## Destaques do projeto

- experiência visual inspirada na atmosfera de terror e suspense de Resident Evil
- página inicial cinematográfica com vídeos e música temática
- navegação por jogos com foco em identidade visual de cada título
- páginas complementares para personagens e conteúdos extras
- design responsivo para desktop e mobile
- uso de animações para aumentar a sensação de imersão

## Roadmap sugerido

- expandir a cobertura de jogos e personagens da franquia
- melhorar a organização de conteúdo por categorias e capítulos
- adicionar mais galerias e materiais multimídia
- otimizar performance e carregamento de assets
- evoluir a arquitetura para facilitar manutenção e novos módulos

## Solução de problemas comuns

### O projeto não inicia

```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Erro de compatibilidade com Node

Se aparecer algum erro relacionado ao OpenSSL ou versões mais recentes do Node, use:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

### Vídeo ou áudio não carregam

- atualize a página
- verifique permissões do navegador
- teste em outra aba ou em modo desktop
- confirme se o navegador não está bloqueando mídia automática

## Galeria em destaque

O portal foi pensado para destacar a identidade visual dos jogos e da franquia, com elementos que reforçam o clima de mistério, sobrevivência e tensão.

## Finalidade

Este projeto tem como objetivo criar uma experiência inspirada em portais temáticos, reunindo nostalgia, estética e conteúdo sobre Resident Evil em um único ambiente digital.

Se você curte a franquia, este projeto é uma homenagem ao estilo, à atmosfera e ao legado que Resident Evil construiu ao longo dos anos.
