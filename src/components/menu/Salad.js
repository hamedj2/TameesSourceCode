import React, { useState, useEffect} from "react";
import styles from "./AllMenu.module.css";

import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import MenuCard from "./MenuCard";


const Salad = () => {


  const [saladMenu, setSaladMenu] = useState([]);
  //SaladMenu Database on Firebase
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Salad"), (snapshot) => {
      setSaladMenu(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Salad</h1>
      <div className={styles.container}>
        {saladMenu.map((menu) => (
          <MenuCard
            image={menu.image}
            name={menu.name}
            cost={menu.cost}
            key={menu.id}
            details={menu.details}
            id={menu.id}
          />
        ))}
      </div>
      <div className={styles.hidden}></div>
    </div>
  );
};

export default Salad;
