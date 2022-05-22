import React, { useState, useEffect } from "react";
import styles from "./AllMenu.module.css";

import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import MenuCard from "./MenuCard";

const Salad = () => {
  const [eggPlate, setEggPlate] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "EggPlate"), (snapshot) => {
      setEggPlate(
        snapshot.docs.map((docs) => ({ ...docs.data(), id: docs.id }))
      );
    });
  });

  return (
    <>
      <h1 className={styles.title}>EggPlate</h1>
      <div className={styles.container}>
        {eggPlate.map((menu) => (
          <MenuCard
            name={menu.name}
            cost={menu.cost}
            image={menu.image}
            details={menu.details}
            key={menu.id}
            id={menu.id}
          />
        ))}
      </div>
    </>
  );
};

export default Salad;
