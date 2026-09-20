# Palestra Uomo

PWA statica pubblicata su GitHub Pages: https://andreagx.github.io/pale/

## Programma

`program.js` è la fonte unica della scheda A–E; `app.js` genera le card.
Feriali entro 65–70 minuti, weekend fino a 90 minuti. Non è necessario
riempire il tempo disponibile: i tempi dipendono anche da esecuzione e attese.
L'ordine delle sale è cavi/macchine → pesi → avambracci → TRX → tappetino.

Revisione settembre 2026: B ridotta da 13 a 8 esercizi; eliminata la doppia
shoulder press di C; differenziati petto, schiena, braccia e core fra le sedute.
Restano squat, Romanian deadlift e calf raise; esclusi pressa e step-up caricati.

## Immagini e riferimenti

Controllate visivamente tutte le 24 coppie originali Free Exercise DB.
Conservate le immagini che mostrano chiaramente la variante indicata.
Rimosse quelle ambigue o non corrispondenti, comprese overhead triceps extension,
dead bug, reverse crunch, alzate laterali e coppie di curl che mostrano lati
alternati anziché inizio/fine. Le nuove varianti e le card senza foto hanno
indicazioni tecniche testuali. Non si certifica una tecnica completa da due foto.

La card overhead rimanda alla guida con video di Catalyst Athletics:
https://www.catalystathletics.com/exercise/817/Cable-Overhead-Tricep-Extension/
I collegamenti YouTube di ricerca sono etichettati esplicitamente come ricerca,
senza presentarli come video verificati. Foto: Free Exercise DB, Public Domain.

## Dati e aggiornamenti

Le chiavi `pale-…` sono stabili anche quando un esercizio cambia giornata;
nuove varianti hanno nuove chiavi, evitando di ereditare pesi di altri esercizi.
I dati dei vecchi esercizi restano nel dispositivo fino all'azzeramento esplicito.
`reset-all.js` gestisce l'azzeramento con conferma e la navigazione.

`sw.js` precarica il programma per l'uso offline e aggiorna solo le cache `pale-`.
Incrementare il nome della cache quando cambia il programma o il codice.
Le immagini remote e le guide richiedono connessione. Nessuna compilazione richiesta.
`adjustments.js` e `duration-fix.js` sono mantenuti come file vuoti di compatibilità;
non vengono più caricati dalla pagina.
