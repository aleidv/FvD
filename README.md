# Procesverslag
**Auteur:** - Aleid Vliegers -

**De opdrachten:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)


Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.



## Bronnenlijst
  1. https://www.fontspace.com/abeatbykai-font-f11363
  2. https://codepen.io/shooft/pen/gOdbPKV
  3. https://tobiasahlin.com/blog/layered-smooth-box-shadows/
  4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
  5. https://www.w3schools.com/js/js_arrays.asp
  6. https://www.1001fonts.com/tex-gyre-adventor-font.html
  7. https://fonts.google.com/specimen/Sacramento
  8. https://fonts.google.com/specimen/Poppins
  9. https://bennettfeely.com/clippy/
  10. https://github.com/mathieudutour/confetti.js
  11. https://codepen.io/shooft/pen/yLxzgzP
  12. https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
  13. https://stock.adobe.com/uk/images/modern-futuristic-neon-lights-on-old-grunge-brick-wall-room-background-3d-rendering/269545518?




## Opdracht 1 plan

<details open>
  <summary>uitwerken na schetsen idee (voor week 2)</summary>


  ### Je storyboard:
  <img src="readme-images/plan_opdr_1.png" width="375px" alt="storyboard voor opdracht 1">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Keyframes toepassen
  - Het veel gebruik maken van de transform property
  - Uitvinden wat mogelijk is met ::before & ::after
 
</details>



## Opdracht 1 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 4)</summary>


  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/light_mode_na_feedback.png" width="375px" alt="uitomst opdracht 1">
  <img src="readme-images/dark_mode_na_feedback.png" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)

  > het pulserende effect dat ik aan mijn logo heb willen geven met @keyframes is gemakkelijk gegaan.
  > het is me gelukt om de tekst te laten omvallen met @keyframes.
  > ik heb geleerd hoe je door het kleurenwiel gaat en een element meerdere kleuren geeft dmv van een filter.
  > ik heb geleerd hoe je op de meest correcte manier (voor deze opdracht) een font importeerd.
  > ik heb geleerd dat je met ::after & ::before elementen achter en voor een ander element kunt zetten en hoe je dit kunt stylen.
  > de theorie van de lessen begrijpen ging goed.

  <img src="readme-images/result_pump_1.png" width="375px" alt="top">
  <img src="readme-images/result_pump_2.png" width="375px" alt="top">
  <img src="readme-images/result_pump_3.png" width="375px" alt="top">
  <img src="readme-images/result_pump_4.png" width="375px" alt="top">
  <img src="readme-images/result_falls_1.png" width="375px" alt="top">
  <img src="readme-images/result_falls_2.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  > ik heb op meerdere manieren geprobeerd om een pulserende lijn als ::after neer te zetten.
  > o.a. door een background-image met een gradient, door een text decoration: underline wavy en transparante text en door het stijlen van een svg in de content maar geen een manier hiervan is mij gelukt.
  > ik heb geprobeerd audio te importeren dat pas afspeelt wanneer er over heen wordt gehoverd, dit is niet gelukt.

  Na feedback:
  > deze lijn veranderd in twee balletjes die op de beat omhoog en omlaag vallen.


## Opdracht 2 plan

<details>
  <summary>uitwerken na schetsen idee (voor week 5)</summary>


  ### Je ontwerp:
  <img src="readme-images/plan_opdr_2.png" width="375px" alt="ontwerp opdracht 2">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Javascript in geheel
  - De pagina toegankelijk maken met toetsenbord bediening
  - Media queries voor responsiveness
  - Speech API
  - JS transities

</details>



## Opdracht 2 test

<details>
  <summary>uitwerken na testen (week 7)</summary>


  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

> De gebruiker kon de getrokken bingo ballen niet terug vinden. Dit is niet heel erg gebruiksvriendelijk.

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

> Een lijst met getrokken bingo ballen gemaakt d.m.v. JS
  <img src="readme-images/test_resultaat_1.png" width="375px" alt="uitomst opdracht 2">


  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  > De radiobutton options waren niet gebruiksvriendlijk omdat ze met de screenreader niet konden worden gelezen.

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

> Aria labels toegevoegd in de HTML
  <img src="readme-images/test_resultaat_2.png" width="375px" alt="uitomst opdracht 2">


  ### Bevinding 3:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

> De website was niet gebruiksvriendelijk omdat deze niet geheel responsive was.

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

> Responsive gemaakt door de variabelen:
    --white-space: clamp(.5em, 3vmin, 2em);
    en gebruik te maken van de @media only screen and (max-width: 600px)
  <img src="readme-images/test_resultaat_4.png" width="375px" alt="uitomst opdracht 2">
  <img src="readme-images/test_resultaat_3.png" width="375px" alt="uitomst opdracht 2">

</details>



## Opdracht 2 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 8)</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/bingo.png" width="375px" alt="uitomst opdracht 2">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)

  > bingo kaart gemaakt
  > speach api
  > confetti
  > lijst met getrokken bingo ballen
  > rol in & out animaties

  <img src="readme-images/bingo_gelukt_2.png" width="375px" alt="uitomst opdracht 2">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  > Het fiche met een animatie op het scherm laten vallen

  <img src="readme-images/bingo_niet_gelukt_2.png" width="375px" alt="uitomst opdracht 2">

</details>