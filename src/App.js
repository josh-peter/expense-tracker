import "./App.css";
import Header from "./Components/Header";
import TransactionBalance from "./Components/TransactionBalance";
import RemBalance from "./Components/RemBalance";
import History from "./Components/History";
import AddTransaction from "./Components/AddTransaction";

function App() {
  return (
    <div className="App">
      <Header />
      <TransactionBalance />
      <RemBalance />
      <History />
      <AddTransaction />
    </div>
  );
}

export default App;
