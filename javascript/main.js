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
        <h2>Biglietto Standard</h2>
        <p>Nome: ${nome} ${cognome}</p>
        <p>Carrozza: ${carrozza}</p>
        <p>Chilometri: ${km}</p>
        <p>Categoria: ${categoria}</p>
        <p>Prezzo: ${prezzoFinale.toFixed(2)} €</p>
        <p>Codice CP: ${codiceCP}</p>
    `;
});