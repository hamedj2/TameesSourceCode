import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../firebase";
import { NavLink } from "react-router-dom"

//context
import { CardContext } from "./Context/CardContextProvider";

const Navbar = () => {
  let navigate = useNavigate();
  const currentUser = useAuth();

  const [isOpen, setIsOpen] = useState(true);

  const [checkOut, setCheckOut] = useState(false);

  const { state } = useContext(CardContext);

  const clickHandler = () => {
    setIsOpen(!isOpen);
    setCheckOut(false);
  };

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setCheckOut(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, []);

  const checkOutHandler = () => {
    setCheckOut(!checkOut);
  };
  let path = "";
  if (currentUser) {
    path = "/User";
  } else {
    path = "/SignIn";
  }

  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.listContainer}>
        <div className={styles.burgercontainer} onClick={clickHandler}>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
        </div>
        <Link className={`${styles.navbarLink} ${styles.tameestitle}`} to="/">
          TAMEES
        </Link>
        <div className={!isOpen ? styles.notHidden : styles.hidden}>
          <ul className={`${styles.show} ${styles.list}`}>
            <li></li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : styles.link)} to="/" onClick={clickHandler} >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
                to={`/Menu/Salad`}
                onClick={clickHandler}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
                to={path}
                onClick={clickHandler}
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
                to="/AboutUs"
                onClick={clickHandler}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={checkOut ? styles.username : styles.hide}
        onClick={() => {
          setCheckOut(false);
          navigate("/CheckOut");
        }}
      >
        {currentUser?.email}
      </div>
      <div
        className={currentUser ? styles.userSign : styles.hide}
        onClick={() => {
          setCheckOut(false);
          navigate("/CheckOut");
        }}
      >
        <i className="fa-solid fa-user-check"></i>
      </div>
      <div className={!currentUser && checkOut ? styles.noUser : styles.hide}>
        <p
          onClick={() => {
            setCheckOut(false);
            navigate("/SignIn");
          }}
        >
          You need to Sign in
        </p>
      </div>
      <div className={styles.basket} onClick={checkOutHandler}>
        <Link to="#" className={styles.shopping_basket}>
          <i className="fa-solid fa-basket-shopping">
            {" "}
            <span>{state.itemsCounter}</span>
          </i>
        </Link>
      </div>
      <div className={checkOut ? styles.checkout : styles.hideCheckout}>
        <div className={checkOut ? styles.status : styles.hide}>
          You have {state.itemsCounter} items
        </div>
        <button
          className={checkOut ? styles.checkOutButton : styles.hide}
          onClick={() => navigate("/CheckOut")}
        >
          CheckOut
        </button>
      </div>
    </header>
  );
};

export default Navbar;
