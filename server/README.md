Tecnologias
Node.js + Typescript
express
nodemon
Prisma

para iniciar npx nodemon
tente usar
npx prisma studio

Modelos

### Game
ID
title
bannerUrl

### AD
ID
GameId
Name
YearsPlaying
Discord
WeekDays
HourStart
HourEnd
useVoiceChannel
createdAt

### Casos de use
- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncio por game
- Buscar discord pelo ID do anúncio
