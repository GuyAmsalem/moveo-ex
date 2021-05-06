import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./cmps/Navbar";
import { HomePage } from "./views/HomePage";
import { MainApp } from "./views/MainApp";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route component={MainApp} path="/main-app" />
          <Route component={HomePage} path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
