import React, { useContext, useState } from "react";

import styles from "./CheckOut.module.css";
import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebase";

import CheckOutCard from "./CheckOutCard";

//context
import { CardContext } from "./Context/CardContextProvider";

const CheckOut = () => {
  const { state, dispatch } = useContext(CardContext);

  let navigate = useNavigate();

  const currentUser = useAuth();

  const [loading, setLoading] = useState(false);

  async function logoutHandler() {
    setLoading(true);
    try {
      await logout();
      navigate("/");
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.itemContainer}>
          {state.selectedItems.map((item) => (
            <CheckOutCard key={item.id} data={item} />
          ))}

          {state.checkout && (
            <div>
              <h3>Checked out Successfully</h3>
              <button
                onClick={() => {
                  navigate("/Menu/Salad");
                }}
              >
                {" "}
                Order more{" "}
              </button>
            </div>
          )}

          {!state.checkout && state.itemsCounter === 0 && (
            <div>
              <h3>Cart is empty</h3>
              <button
                onClick={() => {
                  navigate("/Menu/Salad");
                }}
                className={styles.goBackToMenuButton}
              >
                Go back to Menu
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.info}>
        {state.itemsCounter > 0 && (
          <div>
            <p>
              <span>Total Items:</span>
              {state.itemsCounter}
            </p>
            <p>
              <span>Total Payment:</span>${state.total}
            </p>

            <div>
              <button
                onClick={() => dispatch({ type: "CHECKOUT" })}
                className={currentUser ? styles.checkOutButton : styles.hide}
              >
                CheckOut
              </button>
              <button
                onClick={() => dispatch({ type: "CLEAR" })}
                className={currentUser ? styles.checkOutButton : styles.hide}
              >
                CLEAR
              </button>
            </div>
            <div>
              <p className={!currentUser ? styles.askSignin : styles.hide}>
                Please Sign in to Check out
              </p>
              <button
                onClick={() => {
                  navigate("/Signin");
                }}
                className={!currentUser ? styles.checkOutButton : styles.hide}
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
