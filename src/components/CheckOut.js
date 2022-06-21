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
              <h3>Shopping card is empty</h3>
              <button
                onClick={() => {
                  navigate("/Menu/Salad");
                }}
                className={styles.checkOutButton}
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
              <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                CheckOut
              </button>
              <button onClick={() => dispatch({ type: "CLEAR" })}>CLEAR</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
