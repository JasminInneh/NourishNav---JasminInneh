import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import { Context } from "../store/appContext";

export const Footer = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="whole-wheat-footer" className="d-flex flex-column">
      <div id="newsletter">
        <div className="row">
          <div className="col-md-12">
            <div className="bg-transparent p-3">
              <h3 className="text-center mb-4 newsletter-text">Join Our Newsletter</h3>
              <p className="text-center newsletter-desc">
                Stay updated with our latest recipes, nutrition tips, and
                special offers.
              </p>
              <form className="row g-2 d-flex justify-content-center">
                <div className="col-md-5 ">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn btn-success w-100">
                    Join Here
                  </button>
                </div>
              </form>
              <div id="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest-p"></i>

              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" className="mt-auto py-3 text-center">
      </footer>
    </div>
  );
};
