import { useEffect, useState, useContext } from "react";
import Component2 from "./Component2";
import styles from "./Component1.module.scss";
export default function Component1({ name, setname }) {
  useEffect(() => {
    console.log("Component1 rendered");
  }, []);
  return (
    <div className={styles.container}>
      Hello from Component 1<br />
      <h2>Prop Value: {name} </h2>
      <button onClick={setname}>Update State</button>
      <br />
      <Component2 name={name} setname={setname} />
    </div>
  );
}
