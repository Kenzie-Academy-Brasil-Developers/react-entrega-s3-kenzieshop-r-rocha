import "./App.css";
import Routes from "./routes";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="App-header">
        <Routes />
      </div>
    </div>
  );
}

export default App;
