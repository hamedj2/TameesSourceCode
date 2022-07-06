import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";

import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Cards = () => {
  const [specialMenu, setSpecialMenu] = useState([]);
  //SpecialMenu Database on Firebase
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "SpecialMenu"), (snapshot) => {
      setSpecialMenu(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

  return (
    <div className={styles.container}>
      {specialMenu.map((menu) => (
        <Card
          image={menu.image}
          name={menu.name}
          cost={`$${menu.cost}`}
          key={menu.id}
        />
      ))}
    </div>
  );
};

export default Cards;
