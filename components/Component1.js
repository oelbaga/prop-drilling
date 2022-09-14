import { useEffect, useState, useContext } from "react";
import AppContext from "../components/AppContext";
import Component2 from "./Component2";
import styles from "./Component1.module.scss";
export default function Component1({ name, setname }) {
  const context = useContext(AppContext);
  useEffect(() => {
    console.log("Component1 rendered");
  }, []);
  return (
    <div className={styles.container}>
      Nested Component 1<br />
      <h2 className={`props`}>Prop Value: {name} </h2>
      <h2 className={`context`}>Context Value: {context.nameContext}</h2>
      <button onClick={setname}>Update State</button>
      <br />
      <Component2 name={name} setname={setname} />
    </div>
  );
}
