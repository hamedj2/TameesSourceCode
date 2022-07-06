import React, { useContext } from "react";

import styles from "./CheckOutCard.module.css";

//context
import { CardContext } from "./Context/CardContextProvider";

const CheckOutCard = (props) => {
  const { image, cost, name, quantity } = props.data;

  const { dispatch } = useContext(CardContext);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.name}>
        <h3>{name}</h3>
      </div> 
      <div className={styles.quantity}>
        <span>{quantity}</span>
      </div>
      <div className={styles.bottonContainer}>
        {quantity > 1 ? (
          <button
            className={styles.decrease}
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            className={styles.remove}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <div className={styles.trash}>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </button>
        )}
        <button
          className={styles.increase}
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CheckOutCard;
