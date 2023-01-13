import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Profile from "../../Images/profile_pic.png";
import TeamWork from "../../Images/teamwork.png";
import Profit from "../../Images/profit.png";

import "./index.css";

function NavBar({ mobileDevice, tableDevice, leptopDevice }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar className="navbar_container" expand="lg">
        <Container fluid>
          <div className="toggole_button">
            <Navbar.Toggle
              aria-controls="navbarScroll"
              onClick={() => setToggle(!toggle)}
            />
            <Navbar.Brand href="#" className="navbar_logo">
              LOGO
            </Navbar.Brand>
          </div>

          {leptopDevice && (
            <Nav
              className="me-auto my-2 my-lg-0 menu_list_wrapper"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="#">Menu 1</Nav.Link>
              <Nav.Link href="#">Menu 2</Nav.Link>
              <Nav.Link href="#">Menu 3</Nav.Link>
            </Nav>
          )}
          <Nav>
            <Nav.Link href="#" className="notification_icon">
              <i
                class="fa-regular fa-bell"
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  padding: "10px",
                  marginRight: "10px",
                }}
              ></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#" className="notification_img">
              <img src={Profile} width={37} height={37} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {toggle && (
        <div className="mobile_content">
          <div className="mobile_contanier_wrapper">
            <Navbar.Brand href="#" className="navbar_logo">
              LOGO
            </Navbar.Brand>
            <div>
              <Button id="close_icon" onClick={() => setToggle(false)}>
                {" "}
                <i class="fa fa-times" aria-hidden="true"></i>
              </Button>
            </div>
          </div>
          <div className="col-12 mt-3 profile_view">
            <div className="avatar-upload">
              <div className="avatar-edit">
                <form action="" method="post" id="form-image">
                  <input
                    type="file"
                    id="imageUpload"
                    accept=".png, .jpg, .jpeg"
                  />
                  <label for="imageUpload"></label>
                </form>
              </div>
              <div className="avatar-preview">
                <img
                  className="profile-user-img img-responsive img-circle"
                  id="imagePreview"
                  src={Profile}
                  alt="User profile picture"
                />
              </div>
            </div>
            <div className="upload_name">
              <div>
                <h2 className="account_name" style={{ color: "#fff" }}>
                  John Smith
                </h2>
                <p className="account_address" style={{ color: "#fff" }}>
                  <i
                    className="fa fa-map-marker"
                    aria-hidden="true"
                    style={{
                      color: "#fff",
                    }}
                  ></i>{" "}
                  Main St. Farmington, CA 123
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="logout_content">
              <img
                src={Profit}
                width={21}
                height={21}
                style={{ color: "#F8991F" }}
              />
              <p style={{ color: "#F8991F" }}>Menu 1</p>
            </div>
            <div className="menu_list_litems">
              <ul>
                <li>Sub menu 1</li>
                <li>Sub menu 2</li>
                <li>Sub menu 3</li>
              </ul>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="logout_content">
              <img src={Profit} width={21} height={21} />
              <p>Menu 2</p>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="logout_content">
              <img src={TeamWork} width={21} height={21} />
              <p>Menu 3</p>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="logout_content">
              <i class="fa fa-sign-out" aria-hidden="true"></i>
              <p>Logout</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
