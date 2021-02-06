### Oblig 4 - Oppgave 4

---
### Antall bilder på forsiden
```
console.log(document.images);
```
Dette gir et resultat på 6 bilder pr 05.02.21  
Om man går inn og ser på img-tab'en, så dukker det opp totalt 22 som da inkluderer bilder i svg-format som er sosiale medier ikoner, piler osv.. 

---
### Lastetid med og uten cache
Uten cache: 415ms  
Med cache: 412ms

---
### Audit
79 Performance  
84 Accessibility  
93 Best Practices  
82 SEO

---
### Antall eksterne requests
Ved å sette filter i network tab til -domain:*.hiof.no får vi resultat:  
9/62 requests er eksterne

---
### Hva er "Content-Type" i response header på https://www.hiof.no/tjenester
Ved å velge tjenester/ (nederste fila) og inspisere den fikk jeg følgende info:  
content-type: text/html;charset=utf-8

---
### Hva er "Cache-Control" i request header på https://www.hiof.no/tjenester
Ved å velge tjenester/ (nederste fila) og inspisere den fikk jeg følgende info:  
cache-control: max-age=60

---
### Hvilken protokoll bruker den siden?
Denne siden bruker h2 (HTTP/2) protokollen