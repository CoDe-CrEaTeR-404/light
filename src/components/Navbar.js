import React from "react";


class Navbar extends React.Component {
  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TextUtiles
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              
            </ul>
            
    
            <div
              className={`form-check form-switch text-${
                this.props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={this.props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
             <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                switch Mode
              </label>

             
            </div>
          </div>
        </div>
      </nav>
      
    );
  }
}

export default Navbar;
