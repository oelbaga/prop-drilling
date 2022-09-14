import { useEffect, useState, useContext } from "react";
import AppContext from "../components/AppContext";
import styles from "./Component2.module.scss";
export default function Component2() {
  const context = useContext(AppContext);

  function changeNameContext() {
    context.setNameContext("Omar");
  }
  useEffect(() => {
    console.log("Component2 rendered");
  }, []);
  return (
    <div className={styles.container}>
      Double Nested Component 2
      <h3 className={`context`}>Context Value: {context.nameContext}</h3>
      <button onClick={changeNameContext}>Update Context State</button>
      <br />
      <br />
    </div>
  );
}
