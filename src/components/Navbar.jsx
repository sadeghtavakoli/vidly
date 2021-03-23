import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <h3 className="navbar-brand m-2 "> Vidly </h3>
          <NavLink className="m-2 " to="/movies">
            Movies
          </NavLink>
          <NavLink className="m-2 " to="/customers">
            Customers
          </NavLink>
          <NavLink className="m-2 " to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="m-2 " to="/counters">
            Counters
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="m-2 " to="/login-form">
                Login
              </NavLink>
              <NavLink className="m-2 " to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="m-2 " to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="m-2 " to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </nav>
    );
  }
}
export default Navbar;
