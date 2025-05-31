import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import main_logo from "../../assets/logo_m.png";
import "./Navbar.css";
import { useUser } from "../../Context/UserContext";

const Navbar = () => {
  // console.log(useUser(),'USERR');
  // const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  const collapseRef = useRef(null); // Reference to the collapse section
  const { state, dispatch } = useUser();
  // useEffect(
  //   () => console.log(state, "State CHanged"),
  //   [dispatch, state, state?.isAuthenticated]
  // );
  // console.log(useUser(),'USER');

  // useEffect(() => {
  //   dispatch({ type: "GET_USER" });
  // }, []);

  useEffect(() => {
    const collapseElement = collapseRef.current;
    let timeoutId;

    // Add event listener to handle auto-close after 5 seconds
    const handleTogglerClick = () => {
      timeoutId = setTimeout(() => {
        if (collapseElement.classList.contains("show")) {
          collapseElement.classList.remove("show");
        }
      }, 3000); // 5 seconds timeout
    };

    // Add click event listener to the toggler button
    if (document.querySelector(".navbar-toggler")) {
      document
        .querySelector(".navbar-toggler")
        .addEventListener("click", handleTogglerClick);

      return () => {
        document
          ?.querySelector(".navbar-toggler")
          ?.removeEventListener("click", handleTogglerClick);
        clearTimeout(timeoutId);
      };
    }
    // Cleanup event listener and timeout on component unmount
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={main_logo} alt="Site Logo" style={{ height: "40px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          ref={collapseRef}
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/classes">
                CLASSES
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                data-bs-toggle="dropdown"
                to="#"
                role="button"
                aria-expanded="false"
              >
                ART WORKSHOPS
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/workshop">
                    Our Art Workshop
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tutorial">
                    Workshop Tutorial
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {!state?.user?.fullName ? (
                <Link to="/login">
                  <button
                    id="login_btn"
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    LOG IN
                  </button>
                </Link>
              ) : (
                <Link to="/profile">
                  <button
                    id="login_btn"
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    {state?.user?.fullName}
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
