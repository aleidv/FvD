// JavaScript Document

// VARIABELEN
let huidigeIndex = 0;

const ulEl = document.querySelector("main section ul");
const h2El = document.querySelector("main h2");
const buttonEl = document.querySelector("main>button");
const getrokkenBingoBallen = document.querySelector("main>section>ol");
const balNummer = document.querySelector("main>ol li");

const RadioInputEl1 = document.querySelector("section input:first-of-type");
const RadioInputEl2 = document.querySelector("section input:nth-of-type(2)");
const RadioInputEl3 = document.querySelector("section input:last-of-type");


// ***************************************************************************


// Voegt een event listener toe voor het klikken op de drie radiobuttons
// Als de eerste radiobutton wordt geselecteerd worden alle elementen in de lijst "blauwe-kaart", tweede "gele-kaart" en derde "paarse-kaart"
RadioInputEl1.addEventListener("click", function () {
  ulEl.classList.add("blauwe-kaart");
  ulEl.classList.remove("gele-kaart", "paarse-kaart");
});

RadioInputEl2.addEventListener("click", function () {
  ulEl.classList.add("gele-kaart");
  ulEl.classList.remove("blauwe-kaart", "paarse-kaart");
});

RadioInputEl3.addEventListener("click", function () {
  ulEl.classList.add("paarse-kaart");
  ulEl.classList.remove("gele-kaart", "blauwe-kaart");
});


// ***************************************************************************


const totaalAantalNummers = 75;

// Maakt een array met een lengte van "totaal aantal nummers"
// De waarden van elk nummer in de index wordt verhoogd met 1, dus is aantal nummers 1 tot en met 75
const ballenGetallen = Array.from(
  Array(totaalAantalNummers),
  (_, index) => index + 1
);
// ^ Bron: https://www.w3schools.com/js/js_arrays.asp


// Maakt een function aan, shuffeld de elementen in de array en geeft een geshuffelde array terug
// Deze code kan ik niet uitleggen
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
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


// Maakt een const en roept de functie ^ aan en shuffeld de ballen
const geshuffeldeBallen = shuffle(ballenGetallen);


// Maakt een const en roept de functie ^ aan en shuffeld de geschuffelde ballen en neemt de eerste 25
const bingoKaartNummers = shuffle([...geshuffeldeBallen]).slice(0, 25);
// ^ Bron: Babs Luidinga


// Maakt een lijst aan met checkboxen voor de 25 kaart nummers, en maakt daarvoor een li aan voor in de ul
// Deze code kan ik niet uitleggen
function opDeBingoKaart() {
  bingoKaartNummers.forEach((nummer, index) => {
    const listItem = `
      <li ${index === 12 ? "class='thirteenth-item'" : ""}>
      <input type="checkbox" name="${nummer}" id="${nummer}" ${
      index === 12 ? "disabled" : ""
    }>
      <label for="${nummer}" class="${index === 12 ? "bingo-label" : ""}">${
      index === 12 ? "Bingo" : nummer
    }</label>
      </li> 
      `;

    ulEl.insertAdjacentHTML("beforeend", listItem);
  });
}
// ^ Bron: Babs Luidinga

// Roept de functie ^ aan
opDeBingoKaart();


// ***************************************************************************


// Deze code voegt een event listner toe
document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    RadioInputEl1.checked = true;
  } else if (event.key === "2") {
    RadioInputEl2.checked = true;
  } else if (event.key === "3") {
    RadioInputEl3.checked = true;
  }
});
// ^ Bron: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event


// ***************************************************************************


// Deze code genereert confetti
// Deze code kan ik niet uitleggen
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


// Maakt een function aan en genereert een nummer uit de geschudden nummers. Dit numner wordt laten zien in het list item/ de bal 
function ballenOverzicht() {
    const volgendGetal = geshuffeldeBallen[huidigeIndex];
    let overzichtsItem = `
    <li>${volgendGetal}</li>
    `

    // Vertraagd met 2 seconden
    setTimeout(() => {
      balNummer.innerHTML = volgendGetal;
    }, 1000);

    setTimeout(() => {
      getrokkenBingoBallen.insertAdjacentHTML("beforeend", overzichtsItem);  
    }, 3000);

    huidigeIndex++;
  
    // Deze code controleert of de gebruiker alle ballen heeft opgeroepen en als dat zo is, stopt het met luisteren naar de klik op de knop 
    // Dit is om te voorkomen dat er meer ballen worden opgeroepen dan beschikbaar zijn
    // Deze code kan ik niet uitleggen
    if (huidigeIndex === geshuffeldeBallen.length) {
      buttonEl.removeEventListener("click", rolNummer);
    }
    // ^ Bron: Babs Luidinga
  }

// ^ wordt aangeroepen wanneer op de button wordt geklikt
buttonEl.addEventListener('click', ballenOverzicht);


// ***************************************************************************


// Spraak
// Deze code kan ik niet uitleggen

/* de commando's */
const commandos = ["bingo"]; /* deze lijst kun je uitbreiden */
const grammar =
  "#JSGF V1.0; grammar commandos; public <commando> = " +
  commandos.join(" | ") +
  " ;";

/* de browser de benodigde dingen leren */
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

/* een lijstje maken van de grammer/commando's */
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

/* het luisterobject aanmaken en de commando's en de taal leren */
const recognition = new SpeechRecognition();
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = "nl";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

/* als er tekst verstaan is */
function spraakAfhandelen(event) {
  // de laatste tekst uit de results peuteren
  const lijstMetAlleResultaten = event.results;
  const indexVanHetLaatsteResultaat = lijstMetAlleResultaten.length - 1;
  const hetLaatsteResultaat =
    lijstMetAlleResultaten[indexVanHetLaatsteResultaat];

  let deTekstDieVerstaanIs = hetLaatsteResultaat[0].transcript;

  deTekstDieVerstaanIs = deTekstDieVerstaanIs.trim();
  deTekstDieVerstaanIs = deTekstDieVerstaanIs.toLowerCase();

  if (deTekstDieVerstaanIs == "bingo") {
    h2El.innerHTML = "JA! BINGO! GEFELICITEERD! (als je niet hebt gecheat...)";
    // Roept confettie aan
  generateConfetti();
  // ^ Bron: https://github.com/mathieudutour/confetti.js
    document.body.classList.add("bingo");

    setTimeout(() => {
      location.reload();
    }, 20000);
  }

  console.log(deTekstDieVerstaanIs);
}

/* het luisterobject laten luisteren */
function luisteren() {
  recognition.start();
  console.log("Ready to receive a command.");
}

/* als er een woord herkent is - de functie starten */
recognition.onresult = (event) => {
  spraakAfhandelen(event);
};

/* als het luisterobject er onverhoopt mee ophoudt - opnieuw starten met luisteren */
recognition.onend = () => {
  luisteren();
};

/* na het laden van de pagina starten met luisteren */
luisteren();
// ^ Bron: https://codepen.io/shooft/pen/yLxzgzP


// ***************************************************************************


// Zodra er op de knop wordt geklikt wordt de functie (loopje) aangeroepen
buttonEl.addEventListener("click", function(){
  // controleerd of de bal de class .roll-in-animation heeft
  if (balNummer.classList.contains("roll-in-animation")) {
      // zo ja, verwijderd deze
      // zo nee, voegt de .roll-out class toe
      balNummer.classList.remove("roll-in-animation");
      balNummer.classList.add("roll-out-animation");

    // Animaties worden vertraagd met 2 seconden
    setTimeout(() => {
      balNummer.classList.remove("roll-out-animation");
      balNummer.classList.add("roll-in-animation");
    }, 2000);

    // als de bal geen .roll-in-animatie heeft wordt deze toegevoegd
  } else {
    balNummer.classList.add("roll-in-animation");

    // Veranderd de tekst van de h2, na 2 seconden
    setTimeout(() => {
      h2El.innerHTML = "Is dit jouw nummer? Klik het aan op de bingokaart!";
    }, 2000);
  }
})