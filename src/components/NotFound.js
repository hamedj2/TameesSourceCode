import React from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

import PageNotFound from "../images/PageNotFound.png";

const NotFound = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={PageNotFound}/>
      <h1>404 Error</h1>
      <p>This Webpage is not found</p>
      <button onClick={clickHandler}>Go to Home</button>
    </div>
  );
};

export default NotFound;
