import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    // Define path & state if have dropdown menu
    const dropdownPaths = [
      { path: "/some_top_level_route", state: "someUniqueState" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        {/* Logo configs */}
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src={require("../../assets/images/logo.svg")} alt="logo" />
          </a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html">
            <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            />
          </a>
        </div>

        {/* User avatar 👨‍💻 */}
        <ul className="nav user-avatar">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link d-block text-center">
                <div className="profile-image">
                  <img
                    src={require("../../assets/images/faces/face8.jpg")}
                    alt="profile"
                  />
                </div>
                <div className="details text-center">
                  <h4 className="profile-name">Richard V.Welsh</h4>
                  <small className="designation text-muted text-small">
                    Project Manager
                  </small>
                </div>
            </div>
          </li>
        </ul>

        {/* Upcoming meeting 😒 */}
        <div className="upcoming-meeting">
          <div className="text-muted text-small mb-1">Next Meeting</div>
          <a href="index.html">
            <div className="d-flex align-items-center single-meeting">
              <div className="date">
                <h3>25</h3>
                <div className="text-small">Sept</div>
              </div>
              <div className="details">
                <h5 className="mb-0">Design Review</h5>
                <div className="text-muted text-small">09.00am - 11.00am</div>
                <ul className="avatar-cloud">
                  <li>
                    <img 
                    src={require("../../assets/images/faces/face1.jpg")}
                    alt="face"
                    />
                  </li>
                  <li>
                    <img 
                    src={require("../../assets/images/faces/face2.jpg")}
                    alt="face"
                    />
                  </li>
                  <li>
                    <img 
                    src={require("../../assets/images/faces/face3.jpg")}
                    alt="face"
                    />
                  </li>
                  <li>
                    <span>+2</span>
                  </li>
                </ul>
              </div>
            </div>
            </a>
          </div>

        {/* Menu items */}
        <ul className="nav mess-with-overflow">
          <li
            className={
              this.isPathActive("/roadmap") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/roadmap">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="#72A7D8" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 22.2542H2C1.6023 22.2538 1.221 22.0862 0.939778 21.7882C0.65856 21.4902 0.500397 21.0861 0.5 20.6647V17.4855C0.500397 17.064 0.65856 16.66 0.939778 16.3619C1.221 16.0639 1.6023 15.8963 2 15.8959H8C8.3977 15.8963 8.779 16.0639 9.06022 16.3619C9.34144 16.66 9.4996 17.064 9.5 17.4855V20.6647C9.4996 21.0861 9.34144 21.4902 9.06022 21.7882C8.779 22.0862 8.3977 22.2538 8 22.2542V22.2542ZM2 17.4855V20.6647H8V17.4855H2Z"/>
              <path d="M20 14.3063H8C7.6023 14.3059 7.221 14.1383 6.93978 13.8403C6.65856 13.5422 6.5004 13.1382 6.5 12.7167V9.53755C6.5004 9.1161 6.65856 8.71202 6.93978 8.41401C7.221 8.116 7.6023 7.94839 8 7.94797H20C20.3977 7.94839 20.779 8.116 21.0602 8.41401C21.3414 8.71202 21.4996 9.1161 21.5 9.53755V12.7167C21.4996 13.1382 21.3414 13.5422 21.0602 13.8403C20.779 14.1383 20.3977 14.3059 20 14.3063ZM8 9.53755V12.7167H20V9.53755H8Z"/>
              <path d="M11 6.35834H2C1.6023 6.35792 1.221 6.19031 0.939778 5.89229C0.65856 5.59428 0.500397 5.19021 0.5 4.76875V1.58958C0.500397 1.16813 0.65856 0.764057 0.939778 0.466043C1.221 0.16803 1.6023 0.000420824 2 0H11C11.3977 0.000420824 11.779 0.16803 12.0602 0.466043C12.3414 0.764057 12.4996 1.16813 12.5 1.58958V4.76875C12.4996 5.19021 12.3414 5.59428 12.0602 5.89229C11.779 6.19031 11.3977 6.35792 11 6.35834V6.35834ZM2 1.58958V4.76875H11V1.58958H2Z"/>
            </svg>

              <span className="menu-title">Roadmap</span>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/user-pages/blank-page") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/user-pages/blank-page">
            <svg width="24" height="21" viewBox="0 0 24 21" fill="#72A7D8" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.9485 3.02607L16.9835 1.2018C15.2271 0.511536 13.5805 0.166403 12.0437 0.166403C8.84458 0.166403 6.10025 1.25111 3.8107 3.42051C1.52114 5.58992 0.25091 8.36741 0 11.753C0 12.016 0.0940913 12.2543 0.282274 12.4679C0.470456 12.6816 0.674321 12.7884 0.893867 12.7884H1.08205C1.33296 12.7884 1.55251 12.698 1.74069 12.5172C1.92887 12.3364 2.02296 12.1146 2.02296 11.8516C2.24251 8.99194 3.30104 6.68284 5.19854 4.9243C7.09605 3.16577 9.37776 2.2865 12.0437 2.2865C13.5805 2.2865 14.8821 2.53303 15.9485 3.02607ZM20.5589 7.11836C21.4058 8.5975 21.8762 10.1753 21.9703 11.8516C21.9703 12.0817 22.0566 12.2954 22.2291 12.4926C22.4016 12.6898 22.6133 12.7884 22.8642 12.7884H23.0994C23.3503 12.7884 23.5699 12.6734 23.7581 12.4433C23.9462 12.2132 24.0246 11.9831 23.9933 11.753C23.8051 9.28777 23.0367 7.06906 21.688 5.09687L20.5589 7.11836ZM21.0764 0.166403C20.5433 -0.129425 20.0728 -0.0308154 19.6651 0.462231L18.6771 2.1879L17.6421 3.96286L13.1257 11.9502C12.7494 11.8187 12.3887 11.753 12.0437 11.753C10.946 11.753 10.005 12.1639 9.22095 12.9856C8.43685 13.8074 8.04481 14.7935 8.04481 15.9439C8.04481 17.0943 8.43685 18.0804 9.22095 18.9022C10.005 19.7239 10.946 20.1348 12.0437 20.1348C13.1414 20.1348 14.0823 19.7239 14.8664 18.9022C15.6505 18.0804 16.0426 17.0943 16.0426 15.9439C16.0426 14.6948 15.6505 13.7088 14.8664 12.9856L19.2887 5.34339L20.2767 3.51912L21.3587 1.64554C21.7665 0.988148 21.6724 0.495101 21.0764 0.166403ZM12.0437 18.064C11.5105 18.064 11.04 17.8503 10.6323 17.423C10.2246 16.9957 10.0207 16.5027 10.0207 15.9439C10.0207 15.3851 10.2246 14.8921 10.6323 14.4648C11.04 14.0375 11.5105 13.8238 12.0437 13.8238C12.5769 13.8238 13.0473 14.0375 13.4551 14.4648C13.8628 14.8921 14.0666 15.3851 14.0666 15.9439C14.0666 16.5027 13.8628 16.9957 13.4551 17.423C13.0473 17.8503 12.5769 18.064 12.0437 18.064Z"/>
            </svg>
              <span className="menu-title">Team Performance</span>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/financial") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/financial">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="#72A7D8" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.4375 19.125H20.5625V20.5625H0.4375V19.125Z"/>
              <path d="M18.4062 6.90625C18.5969 6.90625 18.7797 6.83052 18.9145 6.69573C19.0493 6.56094 19.125 6.37812 19.125 6.1875V4.03125C19.1249 3.88354 19.0794 3.73943 18.9945 3.61854C18.9096 3.49765 18.7895 3.40585 18.6506 3.35562L10.7444 0.480624C10.5865 0.423532 10.4135 0.423532 10.2556 0.480624L2.34937 3.35562C2.21046 3.40585 2.0904 3.49765 2.00552 3.61854C1.92064 3.73943 1.87506 3.88354 1.875 4.03125V6.1875C1.875 6.37812 1.95073 6.56094 2.08552 6.69573C2.22031 6.83052 2.40313 6.90625 2.59375 6.90625H3.3125V16.25H1.875V17.6875H19.125V16.25H17.6875V6.90625H18.4062ZM3.3125 4.53437L10.5 1.91812L17.6875 4.53437V5.46875H3.3125V4.53437ZM11.9375 16.25H9.0625V6.90625H11.9375V16.25ZM4.75 6.90625H7.625V16.25H4.75V6.90625ZM16.25 16.25H13.375V6.90625H16.25V16.25Z"/>
            </svg>

              <span className="menu-title">Financial</span>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/report") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/report">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="#72A7D8" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.25 14H9.75V17H8.25V14Z"/>
              <path d="M12 12.5H13.5V17H12V12.5Z" />
              <path d="M4.5 9.5H6V17H4.5V9.5Z" />
              <path d="M15.75 2.75H13.5V2C13.5 1.60218 13.342 1.22064 13.0607 0.93934C12.7794 0.658035 12.3978 0.5 12 0.5H6C5.60218 0.5 5.22064 0.658035 4.93934 0.93934C4.65804 1.22064 4.5 1.60218 4.5 2V2.75H2.25C1.85218 2.75 1.47064 2.90804 1.18934 3.18934C0.908035 3.47064 0.75 3.85218 0.75 4.25V20C0.75 20.3978 0.908035 20.7794 1.18934 21.0607C1.47064 21.342 1.85218 21.5 2.25 21.5H15.75C16.1478 21.5 16.5294 21.342 16.8107 21.0607C17.092 20.7794 17.25 20.3978 17.25 20V4.25C17.25 3.85218 17.092 3.47064 16.8107 3.18934C16.5294 2.90804 16.1478 2.75 15.75 2.75ZM6 2H12V5H6V2ZM15.75 20H2.25V4.25H4.5V6.5H13.5V4.25H15.75V20Z"/>
            </svg>
              <span className="menu-title">Report</span>
            </Link>
          </li>
          

          {/* 
            Incase theres dropdown menu in future: uncomment below snippet and  change
              - Above dropdown menu data with state
              - Change router file
          */}

          {/* <li
            className={
              this.isPathActive("/some_top_level_route") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.someUniqueState
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("someUniqueState")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Parent Dropdown menu</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.someUniqueState}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/some_top_level_route/submenu")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/some_top_level_route/submenu"
                  >
                    Sub menu 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/some_top_level_route/submenu2")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/some_top_level_route/submenu2"
                  >
                    Submenu 2
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li> */}
        </ul>
        
        {/* Schedule meeting */}
        <div className="schedule-meeting text-center">
          <div className="icon">
            <img src={require("../../assets/images/icons/schedule-meeting.svg")} alt=""/>
          </div>
          <div className="content">
            <h4>Schedule a meeting</h4>
            <p>Don't miss an important process, talk with your team</p>
            <div className="action">
              <button type="button" className="btn btn-md btn-block btn-light">Schedule Now</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
