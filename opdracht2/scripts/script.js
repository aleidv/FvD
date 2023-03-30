// JavaScript Document


// VARIABELEN
const unorderedList = document.querySelector("ul");
const aantalNummers = 75;

// Deze code maakt een array met getallen van 1 tot en met 'aantalNummers' en ...
const ballen = Array.from(Array(aantalNummers), (_, index) => index + 1);
// ^ Bron: https://www.w3schools.com/js/js_arrays.asp


// FUNCTIES
// definieert een functie genaamd "shuffle" die een array als invoer accepteert en deze array willekeurig herschikt.
// dit wordt gedaan met behulp van een algoritme dat elk element in de array overloopt, een willekeurig indexnummer genereert en het huidige element verwisselt met het element dat overeenkomt met het willekeurige indexnummer.
// de functie retourneert de herschikte array.
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
//   ^ Bron: https://www.w3schools.com/js/js_arrays.asp


// VARIABELEN 
var geshuffeldeBallen = shuffle (ballen);
var kaartNummers = shuffle (geshuffeldeBallen).slice(0,25);


// FUNCTIES
// genereert een lijst met checkboxes voor de kaartNummers die zijn gegenereerd. 
// voor elk kaartnummer wordt er een nieuw listItem element gegenereerd en toegevoegd aan de unorderedList.
// de counter "index" toegevoegd aan de forEach-lus. De counter begint bij 0 en wordt verhoogd bij elke iteratie van de lus. 
// Het if statement gebruikt de ternary operator om te controleren of de huidige index 12 is (wat overeenkomt met het 13e item, omdat de index bij 0 begint). 
// Als dit het geval is, wordt de "disabled" eigenschap toegevoegd aan de bijbehorende checkbox, anders wordt er niets toegevoegd.
function opDeKaart() {
  kaartNummers.forEach((nummer, index) => {
      var listItem = 
      `
      <li ${index === 12 ? "class='thirteenth-item'" : ""}>
      <input type="checkbox" name="${nummer}" id="${nummer}" ${index === 12 ? "disabled" : ""}>
      <label for="${nummer}" ${index === 12 ? "style='visibility: hidden'" : ""}>${nummer}</label>
      </li> 
      `;

      unorderedList.insertAdjacentHTML ('beforeend', listItem);
  } );
}

// roept de functie "opDeKaart" aan
opDeKaart(); 




// // SPRAAK

// /* de commando's */
// const commandos = ['bingo']; /* deze lijst kun je uitbreiden */
// const grammar = '#JSGF V1.0; grammar commandos; public <commando> = ' + commandos.join(' | ') + ' ;'


// /* de browser de benodigde dingen leren */
// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


// /* een lijstje maken van de grammer/commando's */
// const speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);


// /* het luisterobject aanmaken en de commando's en de taal leren */
// const recognition = new SpeechRecognition();
// recognition.grammars = speechRecognitionList;
// recognition.continuous = true;
// recognition.lang = 'nl';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;


//  /* als er tekst verstaan is */
// function spraakAfhandelen(event) {
    
// // de laatste tekst uit de results peuteren
// const lijstMetAlleResultaten = event.results;
// const indexVanHetLaatsteResultaat = lijstMetAlleResultaten.length - 1;
// const hetLaatsteResultaat = lijstMetAlleResultaten[indexVanHetLaatsteResultaat];
    
// let deTekstDieVerstaanIs = hetLaatsteResultaat[0].transcript;

// deTekstDieVerstaanIs = deTekstDieVerstaanIs.trim();
// deTekstDieVerstaanIs = deTekstDieVerstaanIs.toLowerCase();

//     if (deTekstDieVerstaanIs == "bingo") {
//         alert("YEEEEAAH");
//         document.body.classList.add("bingo");
        
//         setTimeout( () => {
//            location.reload();
//         }, 20000);
//     } 


//     console.log(deTekstDieVerstaanIs);
// }

//   /* het luisterobject laten luisteren */
// function luisteren() {
//     recognition.start();
//     console.log('Ready to receive a command.');
//  }
 
//  /* als er een woord herkent is - de functie starten */
//  recognition.onresult = event => {
//     spraakAfhandelen(event);
//  }
 
//  /* als het luisterobject er onverhoopt mee ophoudt - opnieuw starten met luisteren */
//  recognition.onend = () => {
//     luisteren();
//  }
 

//  /* na het laden van de pagina starten met luisteren */
//  luisteren();

// ^ Bron: https://codepen.io/shooft/pen/yLxzgzP