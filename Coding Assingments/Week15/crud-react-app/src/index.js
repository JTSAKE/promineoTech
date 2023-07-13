import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const BILL_ENDPOINT = 'https://6495fed9b08e17c91792ed85.mockapi.io/bill';

export default class APP extends React.Component {
  constructor(props) {
    super(props);
    this.addNewBill = this.addNewBill.bind(this);
    this.deleteBill = this.deleteBill.bind(this);
  }

  render() {
    const bills = this.state
    ? this.state.bills.map((bill, index) => 
      <Bill
      key={index}
      data={bill}
      addBill={this.addNewBill}
      deleteBill={this.deleteBill} />)
      :null;
      return (
        <div>
          {bills}
        </div>
      )
  }

  componentDidMount() {
    fetch(BILL_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      this.setState({
        bills: data
      });
    });
  }

  deleteBill(e, bill) {
    const index = bill.indexOf(bill);
    bill.splice(index, 1);
    updateBill(bill)
      .then(() => {
        this.setState(state => {
          for(let b of state.bills) {
            if (b._id === bill._id) {
              let b = bill;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }

  addBill(e, bill) {
    bill.push(bill);
    updateBill(bill)
      .then(() => {
        this.setState(state => {
          for(let b of state.bills) {
            if (b._id === bill._id) {
              let b = bill;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }
}

function updateBill(bill) {
  return fetch(`${BILL_ENDPOINT}/${bill._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bill)
  });
}