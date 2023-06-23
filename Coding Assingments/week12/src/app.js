let billTable = document.getElementById('outputDataTable');
let API_URL = "https://6495fed9b08e17c91792ed85.mockapi.io/bill/"
let formData = [];
var convertedDateString = '';

//Fetch Data
fetch(API_URL)
.then(response => response.json())
.then(data => {formData = data;
console.log(formData);
}).then (() => {
    inputDataToTable(formData)})
.catch(error => console.log(error));

//Post Data
function postData(data) {
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success', data);
    });
}

function inputDataToTable(data) {
    function convertDate(date) {
        let dateExample = new Date(date);
        let dateStr = String(dateExample);
        let convertedDate = dateStr.substring(4, 15);
        
        convertedDateString = convertedDate;
    }

    for (let i = 0; i < data.length; i++) {
        let row = billTable.insertRow(i + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        convertDate(data[i].dueDate)

        cell1.innerHTML = data[i].id;
        cell2.innerHTML = data[i].billName;
        cell3.innerHTML = `$${data[i].billAmount}`;
        cell4.innerText = convertedDateString;
    }

    function submitForm() {
        let billName = document.getElementById('billName').value;
        let billAmount = document.getElementById('billAmount').value;
        let billDueDate = document.getElementById('billDueDate').value;
    
        let newBill = {
            'billName': billName,
            'billAmount': billAmount,
            'dueDate': billDueDate
        }
        postData(newBill);
    }
    
    document.getElementById('submitButton').addEventListener('click', function(event) {
        event.preventDefault();
        submitForm();
    });
}
