import React from "react";
import styles from "./Menu.module.css";
import { Link, Route, Routes } from "react-router-dom";
import Salad from "./menu/Salad";
import Appetiezers from "./menu/Appetiezers";
import Soup from "./menu/Soup";
import EggsPlate from "./menu/EggsPlate";
var title = "Salad";
const Menu = () => {
  return (
    <div className={styles.container}>
      {/* <h1>Menu</h1> */}
      {/* <p className={styles.line}>----------</p> */}
      <ul className={styles.menus}>
        <li>
          <Link className={styles.links} to="Salad">
            Salad
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="Appetiezers">
            Appetiezers
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="Soup">
            Soup
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="EggsPlate">
            Eggs Plate
          </Link>
        </li>
      </ul>
      {/* <p className={styles.line}>----------</p> */}
      <div>
        <Routes>
          <Route path="Salad" element={<Salad />} />
          <Route path="Appetiezers" element={<Appetiezers />} />
          <Route path="Soup" element={<Soup />} />
          <Route path="EggsPlate" element={<EggsPlate />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
