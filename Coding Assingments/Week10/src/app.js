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
    let planeTicketInputValue = planeTicketInput.value;

    // Creates new Table Row
    let newRow = document.createElement('tr');

    //Creating new Cells for each of our inputs please the automatic numbering of rows
    let numberCell = document.createElement('td');
    let cityCell = document.createElement('td');
    let countryCell = document.createElement('td');
    let planeCell = document.createElement('td');

    //Assigns the input values from the form to the newly created cells
    numberCell.textContent = rowNumber;
    cityCell.textContent = cityInputValue;
    countryCell.textContent = countryInputValue;
    planeCell.textContent = `$${planeTicketInputValue}`;

    //Appends cells with input information to the new row
    newRow.appendChild(numberCell);
    newRow.appendChild(cityCell);
    newRow.appendChild(countryCell);
    newRow.appendChild(planeCell);

    //Adds new rows with cells to the exisiting table
    table.appendChild(newRow);

    //Increases row number for each row
    rowNumber += 1;

    //Resent form inputs 
    cityInput.value = '';
    countryInput.value = '';
    planeTicketInput.value = '';
});