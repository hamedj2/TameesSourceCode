import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";
import logo from "../images/logo-tamees.png";
import CaesarSalad from "../images/menu/Appetizers and Salads/Caesar Salad.jpg";
import CheeseSambousa from "../images/menu/Appetizers and Salads/Cheese Sambousa.jpg";
import FrenchFries from "../images/menu/Appetizers and Salads/French fries.jpg";
import FreshVegetablePlatter from "../images/menu/Appetizers and Salads/Fresh Vegetable Platter.jpg";
import PremiumQuality from "../images/PremiumQuality.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageContainer}>
        <img
          src={CaesarSalad}
          alt="Ceasar Salad"
          className={styles.topImage1}
        />
        <img
          src={CheeseSambousa}
          alt="Ceasar Salad"
          className={styles.topImage2}
        />
        <img
          src={FrenchFries}
          alt="Ceasar Salad"
          className={styles.topImage3}
        />
        <img
          src={FreshVegetablePlatter}
          alt="Ceasar Salad"
          className={styles.topImage4}
        />
      </div>
      <div className={styles.backdrop}>
        <div></div>
      </div>
      <div>
        <img
          src={PremiumQuality}
          alt="premium Quality sign"
          className={styles.topImage5}
        />
      </div>
      <img src={banner} alt="banner image" className={styles.bannerImage} />

      <div className={styles.bannerTextContainer}>
        <img src={logo} alt="logo image" className={styles.logoClass} />
        <h1> TAMEES</h1>
      </div>
    </div>
  );
};

export default Banner;
