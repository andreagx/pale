// Programma unico: titolo, attrezzi, serie, recupero, guida, foto, formato, sala, chiave stabile, tecnica.
const W=[
  [
    "A",
    "Petto + Tricipiti + Core",
    "purple",
    [
      [
        "Croci ai cavi",
        "Cavi",
        "2 × 12–15",
        "60 s",
        "https://www.youtube.com/results?search_query=cable+chest+fly+proper+form+tutorial",
        "Cable_Crossover",
        null,
        "ATTREZZI / CAVI",
        "A-1",
        "Gomiti morbidi e angolo stabile; avvicina le braccia senza spingere con il tronco."
      ],
      [
        "Pushdown tricipiti con corda",
        "Cavo alto + corda",
        "3 × 10–12",
        "60 s",
        "https://www.youtube.com/results?search_query=rope+triceps+pushdown+proper+form+tutorial",
        "Triceps_Pushdown_-_Rope_Attachment",
        null,
        "ATTREZZI / CAVI",
        "A-2",
        "Braccia vicine al busto; estendi i gomiti senza oscillare con spalle o schiena."
      ],
      [
        "Cable crunch",
        "Cavo alto + corda",
        "2 × 12–15",
        "45 s",
        "https://www.youtube.com/results?search_query=cable+crunch+proper+form+tutorial",
        null,
        "text",
        "ATTREZZI / CAVI",
        "A-3",
        "Avvicina le costole al bacino; non trasformare il crunch in un piegamento delle anche."
      ],
      [
        "Distensioni manubri su panca piana",
        "Panca + manubri",
        "4 × 8–12",
        "90 s",
        "https://musclewiki.com/exercise/dumbbell-bench-press",
        "Dumbbell_Bench_Press",
        null,
        "PESI LIBERI",
        "A-4",
        "Piedi stabili, scapole appoggiate; scendi con controllo e polsi sopra i gomiti."
      ],
      [
        "French press con due manubri",
        "Panca + due manubri",
        "2 × 10–12",
        "60 s",
        "https://www.youtube.com/results?search_query=dumbbell+lying+triceps+extension+proper+form+tutorial",
        "Lying_Dumbbell_Tricep_Extension",
        null,
        "PESI LIBERI",
        "A-6",
        "Due manubri: piega ed estendi i gomiti mantenendo le braccia stabili."
      ],
      [
        "TRX chest press",
        "Cinghie TRX",
        "2 × 12–15",
        "60 s",
        "https://www.youtube.com/results?search_query=TRX%20chest%20press%20proper%20form%20tutorial",
        null,
        "text",
        "TRX / SOSPENSIONE",
        "A-TRX-CP",
        "Corpo in linea; scegli un’inclinazione gestibile, senza cedere con il bacino."
      ],
      [
        "Plank",
        "Corpo libero",
        "3 × 40–45 s",
        "45 s",
        "https://www.youtube.com/results?search_query=forearm+plank+proper+form+E3+Rehab",
        "Plank",
        "single",
        "CORE",
        "A-7",
        "Gomiti sotto le spalle, addome attivo; respira senza inarcare la zona lombare."
      ]
    ]
  ],
  [
    "B",
    "Schiena + Bicipiti + Gambe + Core",
    "blue",
    [
      [
        "Lat machine presa larga",
        "Lat machine",
        "3 × 8–12",
        "90 s",
        "https://www.youtube.com/results?search_query=lat+pulldown+wide+grip+proper+form+tutorial",
        "Wide-Grip_Lat_Pulldown",
        null,
        "ATTREZZI / CAVI",
        "B-1",
        "Tira davanti al petto; evita slanci e trazioni dietro la nuca."
      ],
      [
        "Seated row al pulley",
        "Pulley basso",
        "2 × 10–12",
        "75 s",
        "https://www.youtube.com/results?search_query=seated+cable+row+proper+form+tutorial",
        "Seated_Cable_Rows",
        null,
        "ATTREZZI / CAVI",
        "B-2",
        "Busto stabile; porta i gomiti indietro senza dondolare avanti e indietro."
      ],
      [
        "Curl bilaterale al cavo",
        "Cavo basso",
        "2 × 10–12",
        "60 s",
        "https://www.youtube.com/results?search_query=standing+cable+biceps+curl+proper+form+tutorial",
        "Standing_Biceps_Cable_Curl",
        null,
        "ATTREZZI / CAVI",
        "B-3",
        "Gomiti vicini ai fianchi; solleva senza portare avanti le spalle."
      ],
      [
        "Goblet squat",
        "Manubrio o kettlebell",
        "3 × 10–12",
        "90 s",
        "https://www.youtube.com/results?search_query=dumbbell%20goblet%20squat%20proper%20form%20tutorial",
        null,
        "text",
        "PESI LIBERI",
        "B-SQ",
        "Peso vicino al petto, piedi stabili; usa una profondità controllata e senza dolore."
      ],
      [
        "Romanian deadlift con manubri",
        "Manubri",
        "3 × 10–12",
        "90 s",
        "https://www.youtube.com/results?search_query=dumbbell%20Romanian%20deadlift%20proper%20form%20tutorial",
        null,
        "text",
        "PESI LIBERI",
        "B-RDL",
        "Ginocchia leggermente flesse; spingi le anche indietro e tieni i manubri vicini alle gambe."
      ],
      [
        "Calf raise in piedi con manubri",
        "Manubri",
        "2 × 15–20",
        "45 s",
        "https://www.youtube.com/results?search_query=standing%20dumbbell%20calf%20raise%20proper%20form%20tutorial",
        null,
        "text",
        "PESI LIBERI",
        "B-CALF",
        "Dal pavimento, solleva i talloni senza rimbalzi; appoggiati per l’equilibrio se necessario."
      ],
      [
        "TRX row",
        "Cinghie TRX",
        "2 × 10–12",
        "60 s",
        "https://www.youtube.com/results?search_query=TRX%20row%20proper%20form%20tutorial",
        null,
        "text",
        "TRX / SOSPENSIONE",
        "B-TRX-ROW",
        "Corpo in linea; tira i gomiti indietro senza alzare le spalle."
      ],
      [
        "Dead bug",
        "Tappetino",
        "2 × 8 / lato",
        "45 s",
        "https://www.youtube.com/results?search_query=dead+bug+proper+form+E3+Rehab",
        null,
        "text",
        "CORE",
        "B-9",
        "Allunga braccio e gamba opposti; mantieni il bacino fermo e non inarcare la schiena."
      ]
    ]
  ],
  [
    "C",
    "Spalle + Braccia + Core",
    "green",
    [
      [
        "Shoulder press guidata",
        "Macchina shoulder press",
        "3 × 8–12",
        "90 s",
        "https://www.youtube.com/results?search_query=machine+shoulder+press+proper+form+tutorial",
        "Leverage_Shoulder_Press",
        null,
        "ATTREZZI / CAVI",
        "C-1",
        "Regola il sedile; schiena appoggiata e spinta controllata, senza slanci."
      ],
      [
        "Overhead triceps extension con corda",
        "Cavo + corda",
        "3 × 10–12",
        "60 s",
        "https://www.catalystathletics.com/exercise/817/Cable-Overhead-Tricep-Extension/",
        null,
        "text",
        "ATTREZZI / CAVI",
        "C-3",
        "Cavo alle spalle, corda dietro la testa. Mantieni le braccia alte e stabili; estendi gli avambracci senza inarcare il tronco."
      ],
      [
        "Curl manubri su panca inclinata",
        "Panca inclinata + manubri",
        "2 × 10–12",
        "60 s",
        "https://www.youtube.com/results?search_query=incline%20dumbbell%20biceps%20curl%20proper%20form%20tutorial",
        null,
        "text",
        "PESI LIBERI",
        "C-incline-curl",
        "Schiena appoggiata, braccia lungo i fianchi; piega i gomiti senza spostare le spalle."
      ],
      [
        "Alzate laterali",
        "Manubri",
        "3 × 12–15",
        "60 s",
        "https://www.youtube.com/results?search_query=dumbbell+lateral+raise+proper+form+tutorial",
        null,
        "text",
        "PESI LIBERI",
        "C-5",
        "Gomiti leggermente piegati; alza fino circa alle spalle, senza slanci o scrollate."
      ],
      [
        "Alzate posteriori con petto appoggiato",
        "Panca inclinata + manubri",
        "2 × 12–15",
        "60 s",
        "https://www.youtube.com/results?search_query=chest%20supported%20dumbbell%20rear%20delt%20fly%20proper%20form",
        null,
        "text",
        "PESI LIBERI",
        "C-rear-delt",
        "Petto appoggiato; apri le braccia con carico leggero senza sollevare il busto."
      ],
      [
        "Russian twist",
        "Tappetino",
        "2 × 16 totali",
        "45 s",
        "https://www.youtube.com/results?search_query=russian+twist+proper+form+tutorial",
        null,
        "text",
        "CORE",
        "C-7",
        "Piedi appoggiati, movimento piccolo e controllato; evita torsioni brusche."
      ],
      [
        "Side plank",
        "Corpo libero",
        "2 × 30 s / lato",
        "45 s",
        "https://www.youtube.com/results?search_query=side+plank+proper+form+E3+Rehab",
        "Side_Bridge",
        "single",
        "CORE",
        "B-8",
        "Gomito sotto la spalla, bacino sollevato e corpo allineato."
      ]
    ]
  ],
  [
    "D",
    "Petto + Schiena + Core",
    "orange",
    [
      [
        "Pullover al cavo a braccia tese",
        "Cavo alto + barra",
        "3 × 12–15",
        "60 s",
        "https://www.youtube.com/results?search_query=straight%20arm%20cable%20pulldown%20proper%20form%20tutorial",
        null,
        "text",
        "ATTREZZI / CAVI",
        "D-pullover",
        "Gomiti morbidi e quasi fermi; porta la barra verso le cosce senza oscillare con il busto."
      ],
      [
        "Pallof press",
        "Cavo all’altezza del petto",
        "3 × 10 / lato",
        "45 s",
        "https://www.youtube.com/results?search_query=standing%20pallof%20press%20cable%20proper%20form%20tutorial",
        null,
        "text",
        "ATTREZZI / CAVI",
        "D-pallof",
        "Stai di lato al cavo; allunga le braccia resistendo alla rotazione del tronco."
      ],
      [
        "Distensioni inclinate manubri",
        "Panca inclinata + manubri",
        "4 × 8–12",
        "90 s",
        "https://musclewiki.com/exercise/dumbbell-incline-bench-press",
        "Incline_Dumbbell_Press",
        null,
        "PESI LIBERI",
        "D-5",
        "Panca moderatamente inclinata; polsi sopra i gomiti e discesa controllata."
      ],
      [
        "Rematore manubrio su panca",
        "Panca + manubrio",
        "3 × 10–12 / lato",
        "75 s",
        "https://www.youtube.com/results?search_query=one+arm+dumbbell+row+proper+form+tutorial",
        "One-Arm_Dumbbell_Row",
        null,
        "PESI LIBERI",
        "B-4",
        "Appoggia mano e ginocchio alla panca; tira verso l’anca senza ruotare il busto."
      ],
      [
        "Croci su panca inclinata",
        "Panca inclinata + manubri",
        "2 × 12–15",
        "60 s",
        "https://musclewiki.com/exercise/dumbbell-incline-chest-flys",
        null,
        "text",
        "PESI LIBERI",
        "D-6",
        "Gomiti morbidi con angolo stabile; apri senza forzare l’allungamento della spalla."
      ],
      [
        "Glute bridge",
        "Tappetino",
        "3 × 12–15",
        "60 s",
        "https://www.youtube.com/results?search_query=bodyweight%20glute%20bridge%20proper%20form%20tutorial",
        null,
        "text",
        "CORE",
        "D-glute-bridge",
        "Spingi attraverso i piedi e solleva il bacino; termina senza inarcare la schiena."
      ],
      [
        "Bird dog",
        "Tappetino",
        "2 × 8 / lato",
        "45 s",
        "https://www.youtube.com/results?search_query=bird%20dog%20proper%20form%20E3%20Rehab",
        null,
        "text",
        "CORE",
        "D-bird-dog",
        "Allunga braccio e gamba opposti; mantieni bacino e schiena stabili."
      ]
    ]
  ],
  [
    "E",
    "Braccia + Avambracci + Core",
    "red",
    [
      [
        "Concentration curl",
        "Panca + manubrio",
        "3 × 10–12 / lato",
        "60 s",
        "https://www.youtube.com/results?search_query=dumbbell%20concentration%20curl%20proper%20form%20tutorial",
        null,
        "text",
        "PESI LIBERI",
        "E-concentration",
        "Gomito appoggiato all’interno della coscia; solleva senza ruotare il busto."
      ],
      [
        "Hammer curl",
        "Manubri",
        "2 × 10–12 / lato",
        "60 s",
        "https://www.youtube.com/results?search_query=hammer+curl+proper+form+tutorial",
        null,
        "text",
        "PESI LIBERI",
        "E-6",
        "Presa neutra, gomiti vicini ai fianchi; completa un lato senza slanci."
      ],
      [
        "Kickback tricipiti con manubrio",
        "Panca + manubrio",
        "2 × 12 / lato",
        "60 s",
        "https://www.youtube.com/results?search_query=dumbbell%20triceps%20kickback%20proper%20form%20tutorial",
        null,
        "text",
        "PESI LIBERI",
        "E-kickback",
        "Busto sostenuto e braccio fermo; estendi solo il gomito usando un carico leggero."
      ],
      [
        "Wrist curl seduto",
        "Panca + manubri leggeri",
        "2 × 15–20",
        "45 s",
        "https://www.youtube.com/results?search_query=seated+dumbbell+wrist+curl+proper+form+tutorial",
        null,
        "text",
        "POLSI / AVAMBRACCI",
        "E-7",
        "Avambracci appoggiati, palmi verso l’alto; muovi soltanto i polsi con carico leggero."
      ],
      [
        "Reverse wrist curl seduto",
        "Panca + manubri leggeri",
        "2 × 15–20",
        "45 s",
        "https://www.youtube.com/results?search_query=seated+reverse+dumbbell+wrist+curl+proper+form+tutorial",
        null,
        "text",
        "POLSI / AVAMBRACCI",
        "E-8",
        "Avambracci appoggiati, palmi verso il basso; solleva le mani senza muovere i gomiti."
      ],
      [
        "TRX triceps extension",
        "Cinghie TRX",
        "2 × 10–12",
        "60 s",
        "https://www.youtube.com/results?search_query=TRX%20triceps%20extension%20proper%20form%20tutorial",
        null,
        "text",
        "TRX / SOSPENSIONE",
        "E-TRX-TRI",
        "Inclinazione facile, corpo in linea e braccia stabili; estendi i gomiti senza cedere col bacino."
      ],
      [
        "Reverse crunch",
        "Tappetino",
        "2 × 10–12",
        "45 s",
        "https://www.youtube.com/results?search_query=reverse+crunch+proper+form+tutorial",
        null,
        "text",
        "CORE",
        "E-11",
        "Solleva appena il bacino arrotolandolo verso le costole; niente slanci o rotolamenti sulle spalle."
      ],
      [
        "Heel taps alternati",
        "Tappetino",
        "2 × 10 / lato",
        "45 s",
        "https://www.youtube.com/results?search_query=supine%20heel%20taps%20core%20proper%20form%20tutorial",
        null,
        "text",
        "CORE",
        "E-heel-taps",
        "Da supino con ginocchia piegate, abbassa un tallone per volta senza inarcare la schiena."
      ]
    ]
  ]
];
