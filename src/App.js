import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import Form from "./components/Form";
import { initGa } from "./components/utils";
import "./App.css";

function App() {
  useEffect(() => {
    initGa();
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Index</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/form" component={Form} exact />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
