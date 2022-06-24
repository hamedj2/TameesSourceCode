import React from "react";
import styles from "./AboutUs.module.css";
import Pattern from "../images/pattern1.png";

const AboutUs = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Address</h2>
        </div>
        <div className={styles.text}>
          <p>
            <i className="fa-solid fa-location-dot"></i> <a href = "https://www.google.com/maps/place/King+Abdullah+Branch+Rd,+Jeddah+Saudi+Arabia/@21.5107397,39.1802841,17z/data=!3m1!4b1!4m5!3m4!1s0x15c3cfbb55ce6fa7:0x11ef32606fb3377b!8m2!3d21.5107397!4d39.1802841"> King Abdullah Branch,
            Jeddah, Saudi Arabia </a>
          </p>
        </div>
        <div className={styles.title}>
          <h2>Phone Numbers</h2>
        </div>
        <div className={styles.text}>
          <div className={styles.phones}>
            <a href="tel:0551340474" className={styles.phoneNumber} >
              <i className="fa-solid fa-phone"></i> 055 134 0474
            </a>
            <br />
            <a href="tel:0545996006" className={styles.phoneNumber}>
              <i className="fa-solid fa-phone"></i> 054 599 6006
            </a>
          </div>
        </div>
        <div className={styles.title}>
          <h2>Work Hours</h2>
        </div>
        <div className={styles.text}>
          <p>
            <span>Saturday:</span> 4:00 pm - 4:00 am
          </p>
          <p>
            <span>Sunday:</span> 4:00 pm - 4:00 am
          </p>
          <p>
            <span>Monday:</span> 4:00 pm - 4:00 am
          </p>
          <p>
            <span>Tuesday:</span> 4:00 pm - 4:00 am
          </p>
          <p>
            <span>Wednesday:</span> 4:00 pm - 4:00 am
          </p>
          <p>
            <span>Thursday:</span> 4:00 pm - 4:00 am
          </p>
          <p>
            <span>Friday:</span> 4:00 pm - 4:00 am
          </p>
          <p>
          <b>Tamees restaurant </b>This restaurant sets a high standard for its food quality and ensures that guests receive the same quality with every meal. Serving quality food can earn your restaurant a good reputation and compel their guests to return for repeated visits.we provide multiple varities like traditional dishes include Maq'louba, Margooga, Harees, Machbous, Frsee'ah, Fireed, Jisheid, and  breads like raqaq, khameer, and chebab, served with cheese, date syrup, or eggs.
          </p>
        </div>
      </div>
      <img className={styles.pattern} src={Pattern} />
    </div>
  );
};

export default AboutUs;
