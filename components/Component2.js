import { useEffect, useState, useContext } from "react";
import styles from "./Component2.module.scss";
export default function Component2({ name, setname }) {
  useEffect(() => {
    console.log("Component2 rendered");
  }, []);
  return (
    <div className={styles.container}>
      Hello From Component2
      <h3>Prop Value: {name}</h3>
      <button onClick={setname}>Update State</button>
    </div>
  );
}
