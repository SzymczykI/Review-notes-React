import Filter from "./components/Filter";
import Header from "./components/Header";
import Table from "./components/Table";
import { DataProvider } from "./store/GlobalState";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <header>
          <Header />
        </header>
        <Filter />
        <Table />
      </div>
    </DataProvider>
  );
}

export default App;
