// JavaScript Document


// variabelen
const unorderedList = document.querySelector("ul");
const aantalNummers = 75;
const ballen = Array.from(Array(aantalNummers), (_, index) => index + 1);
console.log(ballen);
// ^ Bron: https://www.w3schools.com/js/js_arrays.asp


// Deze functie shuffelt random 
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


var geshuffeldeBallen = shuffle (ballen);
console.log(geshuffeldeBallen);

var kaartNummers = shuffle (geshuffeldeBallen).slice(0,25);
console.log(kaartNummers);


function opDeKaart() {
    kaartNummers.forEach(nummer => {
        var listItem = 
        `
        <li>
        <input type="checkbox" name="${nummer}" id="${nummer}">
        <label for="${nummer}">${nummer}</label>
        </li> 
        `;

        unorderedList.insertAdjacentHTML ('beforeend', listItem);
} );
}

opDeKaart(); 




// // spraak

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