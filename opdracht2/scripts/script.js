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

// Maakt een array met een lengte van "aantal nummers"
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

// Maakt een const en roept de functie ^ aan en shuffeld de ballen
const geshuffeldeBallen = shuffle(ballenGetallen);

// Maakt een const en roept de functie ^ aan en shuffeld de geschuffelde ballen en neemt de eerste 25
// ...
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


// Confettie functie
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
  
    if (huidigeIndex === geshuffeldeBallen.length) {
      buttonEl.removeEventListener("click", rolNummer);
    }
  }

buttonEl.addEventListener('click', ballenOverzicht);




// Voegt een event listener toe voor het klikken op de button
// buttonEl.addEventListener("click", function () {
//   // Voegt de rotate-animation class toe
//   // balNummer.classList.add("rotate-animation");
//   h2El.innerHTML = "Is dit jouw nummer? Klik het aan op de bingokaart!";

//   // Wacht tot de rotate-animatie is afgelopen
//   // buttonEl.addEventListener("transitionend", function () {
//     // Verwijder de rotate-animation class van de button
//     // balNummer.classList.remove("rotate-animation");

//     // Voeg de roll-in-animation class toe aan de bal
//     balNummer.classList.add("roll-in-animation");

//     // Wacht tot de roll-in-animatie is afgelopen
//     // balNummer.addEventListener("animationend", function () {
//     //   // Verwijder de roll-in-animation class van de bal
//     //   balNummer.classList.remove("roll-in-animation");
//     // });

// });

buttonEl.addEventListener("click", function(){
  if (balNummer.classList.contains("roll-in-animation")) {
      balNummer.classList.remove("roll-in-animation");
      balNummer.classList.add("roll-out-animation");

    setTimeout(() => {
      balNummer.classList.remove("roll-out-animation");
      balNummer.classList.add("roll-in-animation");
    }, 2000);

  } else {
    balNummer.classList.add("roll-in-animation");
    setTimeout(() => {
      h2El.innerHTML = "Is dit jouw nummer? Klik het aan op de bingokaart!";
    }, 2000);
  }
})