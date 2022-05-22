import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const { image, name, cost } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt="menu item" />
      <h3>{name}</h3>
      <p>{cost}</p>
    </div>
  );
};

export default Card;
