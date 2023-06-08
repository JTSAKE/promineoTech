const form = document.querySelector('form');
const table = document.querySelector('.tableBody')
let rowNumber = 1;

form.addEventListener('submit', function(event){
    event.preventDefault();

    // Extracting City Input Value
    let cityInput = document.getElementById('cityInput');
    let cityInputValue = cityInput.value;

    // Extracting Country Input Value
    let countryInput = document.getElementById('countryInput');
    let countryInputValue = countryInput.value;

    // Extracting Plane Ticket Input Value
    let planeTicketInput = document.getElementById('planeTicketInput');
    let planeTicketInputValue = planeTicketInput.value

    let newRow = document.createElement('tr')

    let numberCell = document.createElement('td')
    let cityCell = document.createElement('td')
    let countryCell = document.createElement('td')
    let planeCell = document.createElement('td')

    numberCell.textContent = rowNumber;
    cityCell.textContent = cityInputValue;
    countryCell.textContent = countryInputValue;
    planeCell.textContent = `$${planeTicketInputValue}`;

    newRow.appendChild(numberCell);
    newRow.appendChild(cityCell);
    newRow.appendChild(countryCell);
    newRow.appendChild(planeCell);

    table.appendChild(newRow);

    rowNumber += 1;

    cityInput.value = '';
    countryInput.value = '';
    planeTicketInput.value = '';
});

// const table = document.getElementById('#tableBody')

// function addHTML(cityValue, countryValue, ticketValue) {
//     let newRow = document.createElement('tr')

//     let cityCell = document.createElement('td')
//     let countryCell = document.createElement('td')
//     let planeCell = document.createElement('td')

//     newRow.appendChild(cityCell);
//     newRow.appendChild(countryCell);
//     newRow.appendChild(planeCell);

//     table.appendChild(newRow);
// }

// addHTML('Sacramento', 'US', '9.99');