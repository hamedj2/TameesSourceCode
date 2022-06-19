import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./MenuCard.module.css";

//context
import { CardContext } from "../Context/CardContextProvider";

//functions
import { isInCard, quantityCount } from "../functions";

const MenuCard = (props) => {
  const { image, name, cost, details, id } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { state, dispatch } = useContext(CardContext);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.container} ref={ref}>
        <img src={image} alt="menu item" onClick={clickHandler} />
        <h3 className={styles.name} onClick={clickHandler}>
          {name}
          &nbsp;{" "}
          <i className="fa-solid fa-circle-info" onClick={clickHandler}></i>
        </h3>

        <p className={styles.cost}>${cost}</p>
        <div>
          {isInCard(state, id) ? (
            <button
              className={styles.addButton}
              onClick={() => dispatch({ type: "INCREASE", payload: props })}
            >
              {" "}
              +{" "}
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: props })}
              className={styles.button}
            >
              {" "}
              Add to Cart
            </button>
          )}
          {quantityCount(state, id) === 1 && (
            <button
              className={styles.removeButton}
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props })}
            >
              {" "}
              <div className={styles.trash}>
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </button>
          )}
          {quantityCount(state, id) > 1 && (
            <button
              className={styles.decreaseButton}
              onClick={() => dispatch({ type: "DECREASE", payload: props })}
            >
              {" "}
              -{" "}
            </button>
          )}
        </div>
      </div>
      <div className={isOpen ? styles.details : styles.hidden}>
        <img src={image} alt={name} />
        <p className={isOpen ? styles.detailsText : styles.hidden}>{details}</p>
        <button className={styles.backButton} onClick={clickHandler}>
          back
        </button>
      </div>
    </>
  );
};

export default MenuCard;
