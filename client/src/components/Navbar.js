import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [sideBarClick, setSideBarClick] = useState(false);

  return (
    <div className={classes.navbar_sideBar_container}>
      {/*NAV-BAR CODE  */}

      <div className={classes.navbar}>
        <div className={classes.navbar_company_logo}>
          <img alt="Company Logo" src="../Images/company-logo.png" />
        </div>
        <div className={classes.navbar_pages}>
          <div className={classes.navbar_page}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav_link_active" : "nav_link"
              }
            >
              Shop
            </NavLink>
          </div>
          <div className={classes.navbar_page}>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav_link_active" : "nav_link"
              }
            >
              Products
            </NavLink>
          </div>
          <div className={classes.navbar_page}>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav_link_active" : "nav_link"
              }
            >
              Cart
            </NavLink>
          </div>
          <div className={classes.navbar_page}>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "nav_link_active" : "nav_link"
              }
            >
              Orders
            </NavLink>
          </div>
          <div className={classes.navbar_page}>
            <NavLink
              to="/admin/add-product"
              className={({ isActive }) =>
                isActive ? "nav_link_active" : "nav_link"
              }
            >
              Add Products
            </NavLink>
          </div>
          <div className={classes.navbar_page}>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive ? "nav_link_active" : "nav_link"
              }
            >
              Admin Products
            </NavLink>
          </div>
        </div>
        <div className={classes.navbar_searchBox}>
          <input type="search" placeholder="Search Product..." />
        </div>
        <div className={classes.navbar_login_signUp_Btn}>
          <button className={`${classes.login_btn}`} type="button">
            <NavLink
              to="/login"
              style={() => ({
                color: "inherit",
                textDecoration: "none",
              })}
            >
              Login
            </NavLink>
          </button>
          <button className={`${classes.signUp_btn}`} type="button">
            <NavLink
              to="/signup"
              style={() => ({
                color: "inherit",
                textDecoration: "none",
              })}
            >
              SignUp
            </NavLink>
          </button>
        </div>
        <div className={classes.navbar_sideBar}>
          <HiMenu
            className={classes.navbar_sideBar_logo}
            onClick={() => {
              setSideBarClick(!sideBarClick);
            }}
          />
        </div>
      </div>

      {/* SIDE-BAR CODE */}

      {sideBarClick && (
        <div className={classes.sideBar_content}>
          <div>
            <div className={classes.sideBar_halfContent}>
              <button className={`${classes.login_btn}`} type="button">
                <NavLink
                  to="/login"
                  style={() => ({
                    color: "inherit",
                    textDecoration: "none",
                  })}
                >
                  Login
                </NavLink>
              </button>
              <button className={`${classes.signUp_btn}`} type="button">
                <NavLink
                  to="/signup"
                  style={() => ({
                    color: "inherit",
                    textDecoration: "none",
                  })}
                >
                  SignUp
                </NavLink>
              </button>
            </div>
          </div>
          <div className={classes.sideBar_fullContent}>
            <div className={classes.sidebar_page}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav_link_active" : "sideBar_link"
                }
              >
                Shop
              </NavLink>
            </div>
            <div className={classes.sidebar_page}>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "nav_link_active" : "sideBar_link"
                }
              >
                Products
              </NavLink>
            </div>
            <div className={classes.sidebar_page}>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "nav_link_active" : "sideBar_link"
                }
              >
                Cart
              </NavLink>
            </div>
            <div className={classes.sidebar_page}>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? "nav_link_active" : "sideBar_link"
                }
              >
                Orders
              </NavLink>
            </div>
            <div className={classes.sidebar_page}>
              <NavLink
                to="/admin/add-product"
                className={({ isActive }) =>
                  isActive ? "nav_link_active" : "sideBar_link"
                }
              >
                Add Products
              </NavLink>
            </div>
            <div className={classes.sidebar_page}>
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  isActive ? "nav_link_active" : "sideBar_link"
                }
              >
                Admin Products
              </NavLink>
            </div>
            <button className={`${classes.login_btn}`} type="button">
              <NavLink
                to="/login"
                style={() => ({
                  color: "inherit",
                  textDecoration: "none",
                })}
              >
                Login
              </NavLink>
            </button>
            <button className={`${classes.signUp_btn}`} type="button">
              <NavLink
                to="/signup"
                style={() => ({
                  color: "inherit",
                  textDecoration: "none",
                })}
              >
                SignUp
              </NavLink>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
