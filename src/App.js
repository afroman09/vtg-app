import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Main" component={Main} />
        </Switch>
      </Router>
  );
}

export default App;
