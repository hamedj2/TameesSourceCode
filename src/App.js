import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import CarsTitle from "./components/CarsTitle";
import ContactUs from "./components/ContactUs";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/Signin";
import CheckOut from "./components/CheckOut";
import User from "./components/User";

import CardContextProvider from "./components/Context/CardContextProvider";

function App() {
  return (
    <>
      <CardContextProvider>
        <div className={styles.container}>
          <Navbar />

          <Routes>
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Menu/*" element={<Menu />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/User" element={<User/>}/>

            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <CarsTitle />
                  <Cards />
                  <ContactUs />
                  <Footer />
                </>
              }
            />
            <Route path="/*" element={<Navigate to="/notfound" />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </div>
      </CardContextProvider>
    </>
  );
}

export default App;
