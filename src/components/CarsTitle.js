import React, { Component } from "react";
import styles from "./CarsTitle.module.css";

class CarsTitle extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>Today's Special</h3>
        <p className={styles.lineBetween}>
          -------------------------------
        </p>
      </div>
    );
  }
}

export default CarsTitle;
