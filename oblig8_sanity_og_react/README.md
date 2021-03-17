![](./oblig8.svg)

---
### For å kjøre prosjektet er det bare å kjøre følgende kommando:

### React:

```
npm install
npm start
```

### Sanity:
```
npm install
sanity start
```

### Issue:
Innimellom virker det som om opplegget henger litt når den skal hente info fra sanity..  
Dette merkes når man trykker på knappen på siden ```localhost:1234/movies```  

En annen litt rar effekt jeg har opplevd, er at når man skal gå inn på detaljvisning av filmen, så får den ikke det helt med seg.. Man kommer bare til en tom side.. Gå tilbake til ```localhost:1234/movies```, trykk på knappen og prøv å gå inn på filmen igjen.. Må noen ganger gjøre denne prosessen to-tre ganger før resultatet dukker opp.. 

Jeg får ikke noen feilmeldinger underveis, så er ikke helt sikker på hvorfor dette skjer.

---
### Oppgavetekst (sist oppdatert 10.03.21)

Sanity og React (obligatorisk)
Denne oppgaven har som mål å gjøre deg tryggere på å sette opp et enkelt Schema i Sanity og bruke det i React.


### Oppgave

- Sette opp et React prosjekt
- Lage en ```<Movies>``` komponent
- Lage en ```<Movie>``` komponent med to props (title, actor)
- Lage en knapp i ```<Movies>``` som skal håndtere klikk
- Lage en state i ```<Movies>``` som skal holde på data fra Sanity
- Sette opp Sanity
	- Sette opp schema
		- Dokument for movie
			- Skal ha to felter
				- Et felt kalt title av typen string
				- Et felt kalt actor av typen reference
		- Dokument for actor
			- Skal et felt kalt name av typen string
- Koble Sanity og React
	- Lage client.js med nødvendig konfigurasjon
	- Lage en movieService.js for å hente data fra Sanity
- Hente ut data fra Sanity ved å klikke på knappen du har laget allerede
	- Bruk ```<Movie>``` komponente inne i ```<Movies>``` til å skrive ut innholdet
- Frivillig: Style med styled components
