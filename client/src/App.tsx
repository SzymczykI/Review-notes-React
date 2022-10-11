import { useEffect, useState } from "react";
import { data } from "../types";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Table from "./components/table/Table";
import Table2 from "./components/Table2";



function App() {

  const [allNotes, setAllNotes] = useState<data[]>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:1337/all").then(response => response.json())
      .catch((err) => console.log(err));
    
    setAllNotes(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Filter />
        <Table2 allNotes={allNotes} />
      </header>
    </div>
  );
}

export default App;
