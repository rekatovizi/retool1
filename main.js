const API_URL = 'https://retoolapi.dev/wJnCjD/data';

async function init(){
    const response = await fetch(API_URL);
    const data = await response.json();

    const tableBody = document.getElementById('tablazat');
    for (const item of data) {
        backgroundColor = item.szinek === 'piros' ? 'red' : item.szinek === 'kék' ? 'blue' : 'fekete' ? 'black' : 'white';
        const row = document.createElement('tr');
        row.style.backgroundColor = backgroundColor;
        row.style.color = 'white';
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.modell}</td>
            <td>${item.szinek}</td>
            <td>${item.evjarat}</td>
        `;
        tableBody.appendChild(row);
    }   
}

init();