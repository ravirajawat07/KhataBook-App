import React from "react";

const Navbar = ({ dark, changeTheme }) => {
  return (
    <>
      <nav
        className={dark ? "navbar bg-dark-subtle" : "navbar bg-warning-subtle"}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">KhataBook</span>
          <button
            className={dark ? "btn btn-outline-dark" : "btn btn-outline-dark"}
            onClick={changeTheme}
          >
            Dark Mode
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
