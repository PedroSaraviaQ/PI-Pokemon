import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/:name" component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;
