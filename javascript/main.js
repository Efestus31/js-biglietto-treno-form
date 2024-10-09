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

    // Genera un numero casuale per la carrozza e il codice CP
    const carrozza = Math.floor(Math.random() * 5) + 1; // da 1 a 5
    const codiceCP = Math.floor(Math.random() * (100000 - 90000)) + 90000; // da 90000 a 99999

    // Mostra il biglietto
    document.getElementById('risultato').innerHTML = `
        <div class="biglietto">
            <h2>DETTAGLIO PASSEGGERI</h2>
            <div class="dettagli">
                <div><strong>NOME PASSEGGERO:</strong> ${nome} ${cognome}</div>
                <hr>
                <div class="offerta">OFFERTA:</div>
                <div>Biglietto Standard</div>
                <hr>
                <div class="carrozza">CARROZZA:</div>
                <div>${carrozza}</div>
                <hr>
                <div class="codiceCP">CODICE CP:</div>
                <div>${codiceCP}</div>
                <hr>
                <div class="costo">COSTO BIGLIETTO:</div>
                <div>${prezzoFinale.toFixed(2)} €</div>
            </div>
        </div>
    `;
});

// Aggiungi l'evento per il pulsante "Annulla"
document.getElementById('annulla').addEventListener('click', function() {
    document.getElementById('form').reset(); // Reset del modulo
    document.getElementById('risultato').innerHTML = ''; // Cancella il biglietto visualizzato
});