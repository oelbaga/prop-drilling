import { useEffect, useState, useContext } from "react";
import Component1 from "../components/Component1";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [name, setName] = useState("default");
  function changeName() {
    setName("Omar");
  }
  useEffect(() => {
    console.log("Parent Page rendered");
  }, []);
  return (
    <div className={styles.container}>
      Hello from Parent Page
      <h1>Prop Value: {name}</h1>
      <button onClick={changeName}>Update State</button>
      <br />
      <br />
      <Component1 name={name} setname={changeName} />
    </div>
  );
}
