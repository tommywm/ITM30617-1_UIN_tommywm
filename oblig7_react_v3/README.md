![](./oblig7.svg)

---
### For å kjøre prosjektet er det bare å kjøre følgende kommando:

```
npm install
npm start
```

--- 
### .env

Det er laget en ekstra env-fil (uten .) i root, som inneholder viktig info som man trenger. Døp denne om til .env dersom den originale .env-filen ikke skulle være der.

Som en ekstra backup, skal jeg bryte med alt av normer siden dette ikke er suuuuuperhemmelige saker..

### ```FOR YOUR 👀 ONLY:```

```
API_URL=http://www.omdbapi.com/?apikey=5b586fa
```
Dette er innholdet i .env-filen. Dersom ingen av filen skulle være med i repo, lag en .env-fil i root og lim inn denne koden.

---
### Disclaimer

.css-koden som er brukt fra linje 52 i ./src/assets/scss/styles.scss-filen er ```IKKE``` min egen. Dette er copy/paste. ```KUN``` brukt for en morsom effekt.  
Kilde: https://www.darkcode.info/2018/10/3d-flip-card-effect-on-hover-using-only.html

---
### Oppgavetekst (sist oppdatert 09.03.21)

Denne oppgaven har som mål å gjøre deg tryggere på det å snakke med et API for å hente ut data. Du får også trent på å lage komponenter og sende funksjoner fra en parent ned til en child. I tillegg får du øvd deg på bruk av livssyklus hooks (useEffect).

### Oppgave  

- Få / lag en API nøkkel fra OmdbApi (Lenker til en ekstern side.) (eller liknenden)
- Lag en ```<Search>``` komponent med search og setSearch props
- Lag en ```<Movies>``` komponent med en movies prop
- Lag en ```<Movie>``` komponent med en movie prop. ```<Movie>``` skal brukes av ```<Movies>```. Tenk at ```<Movies>``` holder på listen og ```<Movie>``` er listeelementet.
	- Style ```<Movies>``` slik at du får en 3x3 Grid med Gap 24px.
- Lag en ```<Main>``` komponent som bruker ```<Search>``` og ```<Movies>``` komponentene (det er her alt skal skje)
- Lag en utils/request fil hvor du lager request funksjonen med «fetch» og feilhåndteringen.
	- Se "fetch videoer i leksjon 7"
- Sett alt sammen i ```<Main>``` slik at det er mulig å søke i API og skrive ut resultatet.
	- Ting du nå trenger å sette opp i main er:
	- search og setSearch verdien som nå håndteres i Main (tenk useState)
	- movies som nå håndteres i main (tenk useState)
	- håndtere submit
- Gjør at ```<Movies>``` by default viser 5 filmer med søkeordet StarWars via useEffect
	- Se video om "Fetch og useEffect" i leksjon 7
- Bonus
	- Sett opp navigasjon med React Router.
		- Se video om "React Router Basic og Navigation"
	- Lag rute for /movies hvor alt fra Main bor
		- Se video om "React Router Basic og Navigation"
	- Lag en rute for /movie/:slug hvor du kan se diverse info om en film du har klikket på i ```<Movies>```
		- Se video om "React Router Dynamisk"  

(Du kan starte med å skrive alt i App.js hvis det er ønskelig og deretter flytte alt over til komponenter)