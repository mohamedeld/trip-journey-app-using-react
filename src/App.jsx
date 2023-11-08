import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import List from "./components/List";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [trips, setTrips] = useState([]);
  console.log("parent");
  function handleSubmitData(data) {
    setTrips((prevState) => [...prevState, data]);
  }
  function handleFilter(id) {
    setTrips((prevState) => prevState.filter((trip) => trip.id === id));
  }
  function handleToggleItem(id) {
    setTrips((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isCheck: !item.isCheck } : item
      )
    );
  }
  function handleClear() {
    setTrips([]);
  }
  return (
    <div className="app">
      <Header />
      <Nav onHandleSubmit={handleSubmitData} />
      <main>
        <List
          trips={trips}
          onHandleFilter={handleFilter}
          onToggleItem={handleToggleItem}
        />
        <div className="actions">
          <select>
            <option value="title">Sort by title</option>
            <option value="title">Sort by title</option>
          </select>
          <button onClick={handleClear}>Clear</button>
        </div>
      </main>
      <Footer tripsCount={trips.length} />
    </div>
  );
}

export default App;
