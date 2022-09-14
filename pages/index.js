import { useEffect, useState, useContext } from "react";
import Component1 from "../components/Component1";
import AppContext from "../components/AppContext";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [name, setName] = useState("default");
  const context = useContext(AppContext);

  function changeName() {
    setName("Omar");
  }
  useEffect(() => {
    console.log("Parent Page rendered");
  }, []);
  return (
    <div className={styles.container}>
      Parent Page
      <h1 className={`props`}>Prop Value: {name}</h1>
      <h1 className={`context`}>Context Value: {context.nameContext}</h1>
      <button
        onClick={() => {
          changeName();
        }}
      >
        Update State
      </button>
      <br />
      <br />
      <Component1 name={name} setname={changeName} />
    </div>
  );
}
