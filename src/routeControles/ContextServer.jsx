import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase";
export const Context = createContext(null);
export default function ContextServer({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState([]);
  const [currentData, setCurrentData] = useState(null);
  const [userData, setUserData] = useState([]);
  const [updateData, setUpdateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  useEffect(() => {
    const currentUserData = allData.filter((data) => data?.uid === user?.uid);
    setUserData(currentUserData);
  }, [allData, user?.uid]);

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
  console.log(userData);
  useEffect(() => {
    fetch("https://b9a10-server-side-saifullah-10.vercel.app/places")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, [currentData, updateData, deleteData]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);
  return (
    <Context.Provider
      value={{
        mode,
        setMode,
        user,
        setUser,
        currentData,
        setCurrentData,
        allData,
        setAllData,
        loading,
        userData,
        updateData,
        setUpdateData,
        setDeleteData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

ContextServer.propTypes = {
  children: PropTypes.node,
};
