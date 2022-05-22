import React  from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../firebase";

import styles from "./User.module.css";

const User = () => {
  let navigate = useNavigate();

    
  async function logoutHandler() {
    try {
      await logout();
      navigate("/");
    } catch {
      alert("Error!");
    }
  }

  return (
    <div className={styles.container}>
      <form  className={styles.formContainer}>
        <h2 className={styles.header}>User:</h2>
      

        <div className={styles.formButtons}>
          <Link to="/Menu/Salad">Go to Menu</Link>
          <button
            type="submit"
            onClick={logoutHandler}
            className={
              styles.enable
            }
          >
            Sign Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
