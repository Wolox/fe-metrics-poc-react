import React, { useEffect } from "react";
import { getCLS, getFID, getLCP } from "web-vitals";

import logo from "../../logo.svg";
import { GaPageView, GaEvent } from "../utils";

function Index() {
  const sendToGA = ({ name, delta, id }) => {
    GaEvent({ action: name, label: id, delta });
  };

  useEffect(() => {
    getCLS(sendToGA);
    getFID(sendToGA);
    getLCP(sendToGA);
  }, [getLCP, getFID, getLCP]);

  useEffect(() => {
    GaPageView();
  }, []);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Index;
