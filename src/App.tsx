import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-blue-300">
      <Header />
      <Home />
    </div>
  );
}

export default App;
