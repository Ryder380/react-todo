import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function navbar() {
  const [loading, setLoading] = useState(false);
  const [logged_user, setLogged_User] = useState("");


  const navigate = useNavigate();

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  const logoutHandle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
      sessionStorage.clear();
    }, 2000);
  };

  const HardlogoutHandle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
      localStorage.clear();
    }, 2000);
  };

  useEffect(() => {
    const name = sessionStorage.getItem("username");
    setLogged_User(name);
    console.log(name)
  },[]);

  if (loading) {
    return <div className="loading">Loading&#8230;</div>;
  }

  return (
    <div>
      {/* <button className="btn btn-primary" onClick={logoutHandle}>
        Logout
      </button> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm border-bottom">
        <div className="container">
          <div className="dropdown">
            <button
              className="btn btn-light border dropdown-toggle px-5 shadow-sm"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {logged_user}
            </button>
            <ul className="dropdown-menu">
              <li>
                <div type="button" className="dropdown-item" onClick={logoutHandle}>
                  Log out
                </div>
              </li>
              <li>
                <div
                  type="button"
                  className="dropdown-item"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="This will clear your all data"
                  onClick={HardlogoutHandle}
                >
                  Hard Logout
                </div>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
