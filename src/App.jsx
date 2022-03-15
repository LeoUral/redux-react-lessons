import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCashAction, getCashAction } from './store/cashReduser';
import { addCustomerAction, removeCustomerAction } from './store/customerReduser';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(cash);

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '3rem', margin: '10px' }} > {cash} </div>
        <button onClick={() => addCash(Number(prompt()))} > Пополнить счет </button>
        <button onClick={() => getCash(Number(prompt()))} > Снять со счета </button>
        <button onClick={() => addCustomer(prompt())} > Добавить клиента </button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                margin: '5px',
                fontSize: '2rem',
                border: '1px solid #000',
                backgroundColor: '#ccc',
                cursor: 'pointer'
              }}
            >
              {customer.name}
            </div>
          )}
        </div>
        :
        <div style={{ fontSize: '2rem' }}>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
}

export default App;
