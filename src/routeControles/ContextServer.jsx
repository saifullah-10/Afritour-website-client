import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase";
export const Context = createContext(null);
export default function ContextServer({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const [mode, setMode] = useState("light");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        console.log("User not found");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);
  return (
    <Context.Provider value={{ mode, setMode, user, setUser, loading }}>
      {children}
    </Context.Provider>
  );
}

ContextServer.propTypes = {
  children: PropTypes.node,
};
