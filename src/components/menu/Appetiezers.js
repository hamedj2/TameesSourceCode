import React, { useState, useEffect } from "react";
import styles from "./AllMenu.module.css";
import MenuCard from "./MenuCard";

import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Appetiezers = () => {
  const [appetizersMenu, setAppetizersMenu] = useState([]);
  //Appetiezers Database on Firebase
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Appetiezers"), (snapshot) => {
      setAppetizersMenu(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

  return (
    <>
      <h1 className={styles.title}>Appetiezers</h1>
      <div className={styles.container}>
        {appetizersMenu.map((menu) => (
          <MenuCard
            name={menu.name}
            cost={menu.cost}
            image={menu.image}
            key={menu.id}
            details={menu.details}
            id={menu.id}
          />
        ))}
        {/* <MenuCard image={FrenchFries} name="French Fries" cost="$8" />
        <MenuCard
          image={FreshVegetablePlatter}
          name="Fresh Vegetable Platter"
          cost="$15"
        />
        <MenuCard image={Homous} name="Homous" cost="$15" />
        <MenuCard image={Kibbeh} name="Kibbeh" cost="$15" />
        <MenuCard image={MeatSamosa} name="Meat Samosa" cost="$15" />
        <MenuCard
          image={MixedAppetizerPlate}
          name="Mixed Appetizer Plate"
          cost="$15"
        />
        <MenuCard image={Sambusah} name="Sambusah" cost="$15" />
        <MenuCard image={VeineLeaves} name="Veine Leaves" cost="$15" /> */}
      </div>
    </>
  );
};

export default Appetiezers;
