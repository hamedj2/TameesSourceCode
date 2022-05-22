import React, { Component } from "react";
import styles from "./ContactUs.module.css";

class ContactUs extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>Contact Us</h3>
        <i
          onClick={() =>
            window.open("https://www.instagram.com/tamees09/?hl=en", "_blank")
          }
          className="fa-brands fa-instagram"
        ></i>
        <i
          onClick={() =>
            window.open("https://www.facebook.com/tamees09/", "_blank")
          }
          className="fa-brands fa-facebook"
        ></i>
        <i
          onClick={() =>
            window.open("https://twitter.com/tamees09?lang=en", "_blank")
          }
          className="fa-brands fa-twitter"
        ></i>
      </div>
    );
  }
}

export default ContactUs;
