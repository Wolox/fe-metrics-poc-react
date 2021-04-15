import React, { useEffect, useState } from "react";
import { getCLS, getFID, getLCP } from "web-vitals";

import { GaPageView, GaEvent } from "../utils";

function Form() {
  const [name, setName] = useState();

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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("[data-form]", name);
  };

  return (
    <div>
      <h1>Form component</h1>
      <form>
        <label>
          Name:
          <input type="text" onChange={handleNameChange} />
        </label>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
