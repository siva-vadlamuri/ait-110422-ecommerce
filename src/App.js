import logo from "./logo.svg";
import "./App.css";
import Products from "./components/products/Products";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
