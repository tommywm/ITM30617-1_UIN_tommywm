### Oblig 4 - Oppgave 2

---
### For å kjøre prosjektet er det bare å kjøre følgende kommando:

```
npm install
npm start
```
Andre nyttige kommandoer er:
```
npm run dev
npm run build
```

---
### Where to look
Alle modifikasjoner er gjort i følgende filer:

```
// for `npm run build`:
./babel.config.json
./package.json
./lib/index.js

// for `npm run dev`:
./package.json
./webpack.config.js
./webpack.development.config.js
./public/bundle.js
./public/index.html

// for `npm run build`
./package.json
./webpack.production.config.js

// for `npm run start`
./package.json
./webpack.common.config.js
./src/index.html
./src/index.js
./src/styles.scss
```