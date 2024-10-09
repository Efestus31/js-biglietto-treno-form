document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const km = parseFloat(document.getElementById('km').value);
    const eta = document.getElementById('eta').value;
    let prezzoBase = km * 0.21;
    let prezzoFinale;
    let categoria;

    if (eta === "minorenne") {
         // sconto del 20% per i minorenni
        prezzoFinale = prezzoBase * 0.80;
        categoria = "Minorenne";
    } else if (eta === "maggiorenne") {
       // prezzo normale per i maggiorenni
        prezzoFinale = prezzoBase; 
        categoria = "Maggiorenne";
    } else {
        // sconto del 40% per gli over 65
        prezzoFinale = prezzoBase * 0.60; 
        categoria = "Over 65";
    }


});