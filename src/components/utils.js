import ReactGa from "react-ga";

export const initGa = (id = process.env.REACT_APP_UA_TRAKING_CODE) => {
  ReactGa.initialize(id);
};

export const GaPageView = (page = window.location.pathname) => {
  ReactGa.pageview(page);
};

export const GaEvent = ({ category = "Web Vitals", action, label, delta }) => {
  ReactGa.event({
    category,
    action,
    label,
    value: Math.round(action === "CLS" ? delta * 1000 : delta),
    nonInteraction: true,
    transport: "beacon",
  });
};
