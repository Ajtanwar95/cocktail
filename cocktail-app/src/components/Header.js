/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-secondary ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse text-primary"
            id="navbarTogglerDemo01"
          >
            <Link to="/" class="navbar-brand ">
              <FaCocktail color="red" />
              &nbsp; The Aj Alcoholic
            </Link>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0  ">
              <li class="nav-item ">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link ">
                  Contact
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/help" class="nav-link ">
                  Help
                </Link>
              </li> */}
            </ul>
            {/* <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
