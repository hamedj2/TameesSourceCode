import React, { useState, useEffect } from "react";
import styles from "./AllMenu.module.css";

import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import MenuCard from "./MenuCard";

const Soup = () => {
  const [soup, setSoup] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Soup"), (snapshot) => {
      setSoup(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <>
      <h1 className={styles.title}>Soup</h1>
      <div className={styles.container}>
        {soup.map((menu) => (
          <MenuCard
            name={menu.name}
            image={menu.image}
            cost={menu.cost}
            details={menu.details}
            key={menu.id}
            id={menu.id}
          />
        ))}
      </div>
    </>
  );
};

export default Soup;
