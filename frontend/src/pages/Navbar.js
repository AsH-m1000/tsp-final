import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            {/* <img src="../public/logo192.png" /> */}
            <img
              src="https://m.media-amazon.com/images/I/71Pvn-uqc7L._SL1080_.jpg"
              style={{ width: 100, height: 100 }}
            />
            <a
              class="navbar-brand"
              href="#"
              style={{ fontWeight: 1000, fontSize: 50 }}
            >
              KRSMSO
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink
                    class="nav-link active"
                    style={{ color: "black" }}
                    aria-current="page"
                    to="/main"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-link"
                    style={{ color: "black" }}
                    to="/sevices"
                  >
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-link"
                    to="/about"
                    style={{ color: "black" }}
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-link"
                    to="/contact"
                    style={{ color: "black" }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                <Button
                  class="btn  btn-style"
                  // type="submit"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
