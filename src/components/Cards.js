import React, { useEffect, useState } from "react";
import styles from "./menu/AllMenu.module.css";
import MenuCard from "./menu/MenuCard";

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
        <MenuCard
          image={menu.image}
          name={menu.name}
          cost={`${menu.cost}`}
          key={menu.id}
          details={menu.details}
          id={menu.id}
        />
      ))}
    </div>
  );
};

export default Cards;
