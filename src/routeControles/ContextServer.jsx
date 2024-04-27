import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const Context = createContext(null);
export default function ContextServer({ children }) {
  const [mode, setMode] = useState("light");
  document.querySelector("html").setAttribute("data-theme", mode);
  return (
    <Context.Provider value={{ mode, setMode }}>{children}</Context.Provider>
  );
}

ContextServer.propTypes = {
  children: PropTypes.node,
};
