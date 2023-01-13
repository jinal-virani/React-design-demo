import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Profile from "../../Images/upload_pic.png";

import "./index.css";

const Invitations = ({
  mobileDeviceProps,
  tableDeviceProps,
  leptopDeviceProps,
}) => {
  const [key, setKey] = useState("received");
  return (
    <div className="invitation_main">
      <div className="invitation_container">
        <div className="invitation_header">
          <h2>Invitations</h2>
          <div className="btn_invitation_list">
            <Tabs
              id="uncontrolled-tab-example"
              className="mb-3 invitation_list"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="sent" title="Sent (15)"></Tab>
              <Tab eventKey="received" title=" Received (5)"></Tab>
            </Tabs>
          </div>
        </div>
        {key === "received" ? (
          <div
            className={
              tableDeviceProps
                ? "scroll_list_style mt-4 mb-3"
                : "scroll_style mt-4 mb-3"
            }
          >
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <img src={Profile} width={35} height={35} />
                </div>
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
                <div>
                  <Button id="check_btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button id="close_btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <img src={Profile} width={35} height={35} />
                </div>
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
                <div>
                  <Button id="check_btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button id="close_btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container list_invitation">
              <div className="invitation_container_wrapper">
                <div>
                  <img src={Profile} width={35} height={35} />
                </div>
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
                <div>
                  <Button id="check_btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button id="close_btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <img src={Profile} width={35} height={35} />
                </div>
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
                <div>
                  <Button id="check_btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button id="close_btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <img src={Profile} width={35} height={35} />
                </div>
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
                <div>
                  <Button id="check_btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button id="close_btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <img src={Profile} width={35} height={35} />
                </div>
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
                <div>
                  <Button id="check_btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button id="close_btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <img src={Profile} width={35} height={35} />
                </div>
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
                <div>
                  <Button id="check_btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button id="close_btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={
              tableDeviceProps
                ? "scroll_list_style mt-4 mb-3"
                : "scroll_style mt-4 mb-3"
            }
          >
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container list_invitation">
              <div className="invitation_container_wrapper">
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 invitation_list_container">
              <div className="invitation_container_wrapper">
                <div>
                  <p>
                    <span>John Smith</span> have invited you to become his
                    family member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invitations;
