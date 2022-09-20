import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import Component1 from "../components/Component1";
import AppContext from "../components/AppContext";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const context = useContext(AppContext);

  function changeName() {
    setName("Omar");
  }
  useEffect(() => {
    console.log("Parent Page rendered");
  }, []);
  return (
    <div className={styles.container}>
      <Header activepage="about" />
      About Page
      <h1 className={`context`}>Context Value: {context.nameContext}</h1>
      <br />
      <br />
      <Component1 />
    </div>
  );
}
