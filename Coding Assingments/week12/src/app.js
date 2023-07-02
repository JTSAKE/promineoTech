class Bill {
    constructor(name, amount, dueDate) {
        this.name = name;
        this.amount = amount;
        this.dueDate = dueDate;
    }
}

class BillService {
    static url = "https://6495fed9b08e17c91792ed85.mockapi.io/bill"

    static getAllBills() {
        return $.get(this.url);
    }

    static getBill(id) {
        return $.get(this.url + `/${id}`)
    }

    static createBill(bill) {
        return $.post(this.url, bill);
    }

    static updateBill(bill) {
        return $.ajax({
            url: this.url + `/${bill.id}`,
            dataType: 'json',
            data: JSON.stringify(bill),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static deleteBill(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: "DELETE"
        });
    };
};

class DomManager {
    static bills;

    static getAllBills() {
        BillService.getAllBills().then (bills => this.render(bills));
    }

    static deleteBill(id) {
        BillService.deleteBill(id)
        .then(() => {
            return BillService.getAllBills();
        })
        .then((bills) => this.render(bills));
    }

    static render(bills) {
        this.bills = bills;
        $('#outputDataTable').empty();
        for (let bill of bills) {
            $('#outputDataTable').append(
                `<tr id = '${bill.id}'>
                    <td class = 'col-2'>${bill.id}</td>
                    <td class = 'col-2'>${bill.name}</td>
                    <td class = 'col-2'>$${bill.amount}</td>
                    <td class = 'col-2'>${new Date(bill.dueDate).toDateString().slice(4)}</td>
                    <td class = 'col-2'>
                        <button class = 'btn p-0' onclick= 'DomManager.deleteBill(${bill.id})'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>
                    </button>
                    </td>
                </tr>
                `
            );
        };
    };

    static createBill(name, amount, dueDate) {
        BillService.createBill(new Bill(name, amount, dueDate))
        .then(() => {
            return BillService.getAllBills();
        })
        .then((bills) => this.render(bills));
    }
};

$('#submitButton').click(() => {
    DomManager.createBill($('#billName').val(), $('#billAmount').val(), $('#billDueDate').val());
    $('#billName', '#billAmount', '#billDueDate').val('');
})

DomManager.getAllBills();