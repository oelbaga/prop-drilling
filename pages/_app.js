import { useState, createContext } from "react";
import AppContext from "../components/AppContext";
import Component2 from "../components/Component2";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("default");
  const anyValue = "";
  return (
    <AppContext.Provider value={{ nameContext, setNameContext }}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
