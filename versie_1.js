// JavaScript Document

// VARIABELEN
const ulEl = document.querySelector("main ul");

const fiche = document.querySelector("main ul li input::before");

const aantalNummers = 75;

let huidigeIndex = 0;

const bal1 = document.querySelector("main ol li:first-of-type");

const h2El = document.querySelector("main h2");

const RadioInputEl1 = document.querySelector("section input:first-of-type");
const RadioInputEl2 = document.querySelector("section input:nth-of-type(2)");
const RadioInputEl3 = document.querySelector("section input:last-of-type");

const buttonEl = document.querySelector("main button");


// Voegt een event listener toe voor het klikken op de button
buttonEl.addEventListener("click", function () {
  // Verwijderd eerst de class
  buttonEl.classList.remove("rotate-animation");
  bal1.classList.remove("roll-in-animation");
  bal1.classList.add("roll-out-animation");

  // Forceer een herberekening van de DOM
  // Deze code kan ik niet uitleggen
  void buttonEl.offsetWidth;
  void bal1.offsetWidth;
  // ^ Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void

  // Voegt de class weer toe na de roll-out animatie
  setTimeout(function () {
    bal1.classList.remove("roll-out-animation");
    bal1.classList.add("roll-in-animation");
    // Vertraagd 2 seconden
  }, 2000);

  // Voegt de rotate-animation class toe
  setTimeout(function () {
    buttonEl.classList.add("rotate-animation");
    // Vertraagd 2 seconden
  }, 2000);
});


// Maakt een array met een lengte van "aantal nummers"
// De waarden van elk nummer in de index wordt verhoogd met 1, dus is aantal nummers 1 tot en met 75
const ballenGetallen = Array.from(
  Array(aantalNummers),
  (_, index) => index + 1
);
// ^ Bron: https://www.w3schools.com/js/js_arrays.asp


// Maakt een function aan, shuffeld de elementen in de array en geeft een geshuffelde array terug
// Deze code kan ik niet uitleggen
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
//   ^ Bron: https://www.w3schools.com/js/js_arrays.asp

// Roept de functie ^ aan en shuffeld de ballen
const geshuffeldeBallen = shuffle(ballenGetallen);

// Roept de functie ^ aan en shuffeld de geschuffelde ballen en neemt de eerste 25
const kaartNummers = shuffle(geshuffeldeBallen).slice(0, 25);
// ^ Bron: Babs Luidinga


// Maakt een lijst aan met checkboxen voor de 25 kaart nummers, en maakt daarvoor een li aan voor in de ul
// Deze code kan ik niet uitleggen
function opDeKaart() {
  kaartNummers.forEach((nummer, index) => {
    const listItem = `
      <li ${index === 12 ? "class='thirteenth-item'" : ""}>
      <input type="checkbox" name="${nummer}" id="${nummer}" ${
      index === 12 ? "disabled" : ""
    }>
      <label for="${nummer}" ${
      index === 12 ? "style='visibility: hidden'" : ""
    }>${nummer}</label>
      </li> 
      `;

    ulEl.insertAdjacentHTML("beforeend", listItem);
  });
}
// ^ Bron: Babs Luidinga

// Roept de functie ^ aan
opDeKaart();


// Maakt een functie aan en haalt het volgende nummer uit de array 'geschuffeldeBallen' en laat dit nummer zien in de ol li aka de bal
// De index van de volgende bal wordt verhoogd. Als de index gelijk is aan de lengte array 'geschuffeldeBallen' wordt de eventlistner voor de button verwijderd
// Deze code kan ik niet uitleggen
function rolNummer() {
  const volgendGetal = geshuffeldeBallen[huidigeIndex];

  let balElement = `
        ${volgendGetal}
  `;
  // Vertraagd met 2 seconden
  setTimeout(() => {
    bal1.innerHTML = balElement;
  }, 2000);
  huidigeIndex++;

  if (huidigeIndex === geshuffeldeBallen.length) {
    buttonEl.removeEventListener("click", rolNummer);
  }
}
// ^ Bron: Babs Luidinga

// Roept de functie ^ aan met een klik
buttonEl.addEventListener("click", rolNummer);


// Zorgt ervoor dat je op 1,2 en 3 kunt klikken en door de radiobuttons heen navigeert
// Deze code kan ik niet uitleggen
document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    RadioInputEl1.checked = true;
  } else if (event.key === "2") {
    RadioInputEl2.checked = true;
  } else if (event.key === "3") {
    RadioInputEl3.checked = true;
  }
});


// Confetti functie
// Kan ik niet uitleggen
function generateConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(confetti);
  }
}
// ^ Bron: https://github.com/mathieudutour/confetti.js


// ***************************************************************************

// SPEECH

/* de commando's */
// const commandos = ["bingo"]; /* deze lijst kun je uitbreiden */
// const grammar =
//   "#JSGF V1.0; grammar commandos; public <commando> = " +
//   commandos.join(" | ") +
//   " ;";

// /* de browser de benodigde dingen leren */
// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
// var SpeechRecognitionEvent =
//   SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// /* een lijstje maken van de grammer/commando's */
// const speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);

// /* het luisterobject aanmaken en de commando's en de taal leren */
// const recognition = new SpeechRecognition();
// recognition.grammars = speechRecognitionList;
// recognition.continuous = true;
// recognition.lang = "nl";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// /* als er tekst verstaan is */
// function spraakAfhandelen(event) {
//   // de laatste tekst uit de results peuteren
//   const lijstMetAlleResultaten = event.results;
//   const indexVanHetLaatsteResultaat = lijstMetAlleResultaten.length - 1;
//   const hetLaatsteResultaat =
//     lijstMetAlleResultaten[indexVanHetLaatsteResultaat];

//   let deTekstDieVerstaanIs = hetLaatsteResultaat[0].transcript;

//   deTekstDieVerstaanIs = deTekstDieVerstaanIs.trim();
//   deTekstDieVerstaanIs = deTekstDieVerstaanIs.toLowerCase();

//   if (deTekstDieVerstaanIs == "bingo") {
//     h2El.innerHTML = "JA! BINGO! GEFELICITEERD! (als je niet hebt gecheat...)";
//     // Roept confettie aan
//   generateConfetti();
//   // ^ Bron: https://github.com/mathieudutour/confetti.js
//     document.body.classList.add("bingo");

//     setTimeout(() => {
//       location.reload();
//     }, 20000);
//   }

//   console.log(deTekstDieVerstaanIs);
// }

// /* het luisterobject laten luisteren */
// function luisteren() {
//   recognition.start();
//   console.log("Ready to receive a command.");
// }

// /* als er een woord herkent is - de functie starten */
// recognition.onresult = (event) => {
//   spraakAfhandelen(event);
// };

// /* als het luisterobject er onverhoopt mee ophoudt - opnieuw starten met luisteren */
// recognition.onend = () => {
//   luisteren();
// };

// /* na het laden van de pagina starten met luisteren */
// luisteren();
// ^ Bron: https://codepen.io/shooft/pen/yLxzgzP

// ***************************************************************************


const ulItems = document.querySelectorAll("main ul li");

// Voegt een event listener toe voor het klikken op de drie radiobuttons
// Als de eerste radiobutton wordt geselecteerd worden alle elementen in de lijst "blauwe-kaart", tweede "gele-kaart" en derde "paarse-kaart"
// Deze code kan ik soort van uitleggen
RadioInputEl1.addEventListener("click", function () {
  ulEl.classList.add("blauwe-kaart");
  ulEl.classList.remove("gele-kaart", "paarse-kaart");

  // ulItems.forEach((item) => {
  //   item.classList.add("blauwe-kaart");
  //   item.classList.remove("gele-kaart", "paarse-kaart");
  // });
});

RadioInputEl2.addEventListener("click", function () {
  ulEl.classList.add("gele-kaart");
  ulEl.classList.remove("blauwe-kaart", "paarse-kaart");

  // ulItems.forEach((deLi) => {
  //   deLi.classList.add("gele-kaart");
  //   deLi.classList.remove("blauwe-kaart", "paarse-kaart");
  // });
});

RadioInputEl3.addEventListener("click", function () {
  ulEl.classList.add("paarse-kaart");
  ulEl.classList.remove("gele-kaart", "blauwe-kaart");

  // ulItems.forEach((item) => {
  //   item.classList.add("paarse-kaart");
  //   item.classList.remove("blauwe-kaart", "gele-kaart");
  // });
});


// Voegt een event listener toe voor het klikken op de button
buttonEl.addEventListener("click", function () {
  // Voegt de rotate-animation class toe
  buttonEl.classList.add("rotate-animation");
  h2El.innerHTML = "Is dit jouw nummer? Klik het aan op de bingokaart!";

  // Wacht tot de rotate-animatie is afgelopen
  buttonEl.addEventListener("transitionend", function () {
    // Verwijder de rotate-animation class van de button
    buttonEl.classList.remove("rotate-animation");

    // Voeg de roll-in-animation class toe aan de bal
    bal1.classList.add("roll-in-animation");

    // Wacht tot de roll-in-animatie is afgelopen
    bal1.addEventListener("transitionend", function () {
      // Verwijder de roll-in-animation class van de bal
      bal1.classList.remove("roll-in-animation");
    });
  });
});
