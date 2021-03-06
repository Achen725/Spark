import React, { Component } from "react";
import logo from "./assets/sparkflame.png";

// Imported by JJ
import Popup from "reactjs-popup";
import SignIn from "./SignIn";

class SparkNavBar extends Component {
  render() {
    return (
      <div className="navbar-cont">
        <nav className="navbar navbar-custom navbar-expand-sm">
          <button className="navbar-brand">
            <img src={logo} width="60" height="60" alt="sparkflame.png" />
          </button>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar_menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form className="form-inline px-4 mx-4">
            <input
              id="Search"
              type="text"
              className="form-control"
              aria_label="Search"
              placeholder="Search all sparks..."
              onChange={e => this.props.search_sparks(e.target.value)}
            />
          </form>
          <div className="collapse navbar-collapse" id="navbar_menu">
            <ul className="navbar-nav">
              <li className="navbar-item px-3">
                <button
                  className="btn btn-outline-primary btn-lg navbar-link"
                  type="button"
                >
                  Explore
                </button>
              </li>
              <li className="navbar-item px-3">
                <button
                  className="btn btn-outline-primary btn-lg navbar-link"
                  type="button"
                >
                  Tags
                </button>
              </li>
              <li className="navbar-item px-3">
                <button
                  className="btn btn-outline-primary btn-lg navbar-link"
                  type="button"
                >
                  Sparkshelf
                </button>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item px-5">
                <Popup
                className="sign-in-popup"
                  trigger={
                    <button
                      className="btn btn-outline-secondary btn-lg navbar-link"
                      type="button"
                    >
                      Sign In
                    </button>
                  }
                  modal
                  lockScroll
                  closeOnDocumentClick
                  closeOnEscape
                  repositionOnResize
                >
                  {close => (
                    <div>
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <SignIn />
                    </div>
                  )}
                </Popup>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default SparkNavBar;
