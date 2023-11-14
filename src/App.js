
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenseBox from './components/IncomeExpenseBox';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
function App() {
  return (
    <div>
  <Header />
    <div className="container">
      <Balance />
      <IncomeExpenseBox />
      <History />
      <AddTransaction />
    </div>
    
    </div>
  );
}

export default App;
