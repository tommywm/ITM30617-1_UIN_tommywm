### Oblig 4 - Oppgave 1

---
### Lage mappe
```
mkdir myAwesomeFolder
```

---
### Lage en fil i mappen
```
touch myAwesomeFolder/myAwesomeFile.md
```
Man kan evt gjøre følgende om man føler det er enklere:
```
cd myAwesomeFolder
touch myAwesomeFile.md
```

---
### Legge tekst til filen
Her lager vi fem linjer på en gang..  
(Ved å gjøre det på denne måten lager vi også en tom linje på toppen og tom linje på bunnen)
```
echo "
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
This is my AWESOME text
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
" >> myAwesomeFolder/myAwesomeFile.md
```

---
### Endre innholdet i filen fra kommandolinjen
Om man bare vil legge til tekst:
```
echo "
💩💩💩💩
AWESOME
💩💩💩💩
" >> myAwesomeFolder/myAwesomeFile.md
```

Om man vi skrive over det som er der fra før:
```
echo "🤙🏼" > myAwesomeFolder/myAwesomeFile.md
```

---
### Slette filen
```
rm myAwesomeFolder/myAwesomeFile.md
```

---
### Slette mappen
```
rmdir myAwesomeFolder
```