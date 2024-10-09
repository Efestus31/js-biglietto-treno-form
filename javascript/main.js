document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const km = parseFloat(document.getElementById('km').value);
    const eta = document.getElementById('eta').value;
    let prezzoBase = km * 0.21;
    let prezzoFinale;
    let categoria;


});