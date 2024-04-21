import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import HeroSection from "./pages/home";
import Contact from "./pages/contact";
import { Demo } from "./pages/demo";
import Login from "./pages/login";
import Private from "./pages/profile";
import Recipe from "./pages/Recipe.jsx";
import UpdatePassword from "./component/UpdatePassword";
import ForgotPassword from "./component/ForgotPassword.js";
import Signup from "./component/signup";

import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


import AboutUs from "./component/AboutUs.jsx";

import MacroTracker from "./component/MacroTracker.js";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<HeroSection />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<MacroTracker />} path="/macro" />
            <Route element={<Recipe />} path="/recipe" />
            <Route element={<Contact />} path="/" />
            <Route element={<Recipe recipes={Recipe} />} path="/recipe" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Private />} path="/profile" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<AboutUs />} path="/about_us" />
            <Route element={<ForgotPassword />} path="/forgotpassword" />
            <Route element={<UpdatePassword />} path="/recoverPassword" />
            <Route element={<h1>Not found!</h1>} />
            <Route
              element={
                <img
                  className="cowPlant"
                  src="https://i.imgur.com/u01pV8K.png"
                  alt="404:PAGE NOT FOUND"
                />
              }
              path="*"
            />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
