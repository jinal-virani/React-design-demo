import React from "react";
import Button from "react-bootstrap/esm/Button";

import Profile from "../../Images/upload_pic.png";
import User from "../../Images/multiuser.png";

import "./index.css";

const FamilyList = ({
  mobileDeviceProps,
  tableDeviceProps,
  leptopDeviceProps,
}) => {
  return (
    <div className="family_main pb-3">
      <div className="family_container">
        <div className="family_header">
          <h2>Family</h2>
          <div className="btn_family_list">
            <i class="fa fa-search" aria-hidden="true"></i>
            <Button id="add_user_btn">Add New</Button>
          </div>
        </div>
        <div className="scroll_style mt-4 mb-3">
          <div className="mt-2 family_list_container">
            <div className="family_container_wrapper">
              <div>
                <img src={Profile} width={35} height={35} />
              </div>
              <div>John Smith</div>
              <div style={{ display: "flex" }}>
                <Button id="admin_btn">Admin</Button>
                <div className="member_icon">
                  <img src={User} width={13} height={11} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 family_list_container list_family">
            <div className="family_container_wrapper">
              <div>
                <img src={Profile} width={35} height={35} />
              </div>
              <div>John Smith</div>
              <div>
                <Button id="add_member_btn">MEMBER</Button>
              </div>
            </div>
          </div>
          <div className="mt-2 family_list_container list_family">
            <div className="family_container_wrapper">
              <div>
                <img src={Profile} width={35} height={35} />
              </div>
              <div>Dianne Russell</div>
              <div>
                <Button id="add_member_btn">MEMBER</Button>
              </div>
            </div>
          </div>
          <div className="mt-2 family_list_container list_family">
            <div className="family_container_wrapper">
              <div>
                <img src={Profile} width={35} height={35} />
              </div>
              <div>Lisa Smith</div>
              <div>
                <Button id="add_member_btn">MEMBER</Button>
              </div>
            </div>
          </div>
          <div className="mt-2 family_list_container list_family">
            <div className="family_container_wrapper">
              <div>
                <img src={Profile} width={35} height={35} />
              </div>
              <div>Sean Michaletz</div>
              <div>
                <Button id="add_member_btn">MEMBER</Button>
              </div>
            </div>
          </div>
          <div className="mt-2 family_list_container list_family">
            <div className="family_container_wrapper">
              <div>
                <img src={Profile} width={35} height={35} />
              </div>
              <div>Sean Michaletz</div>
              <div>
                <Button id="add_member_btn">MEMBER</Button>
              </div>
            </div>
          </div>
          <div className="mt-2 family_list_container list_family">
            <div className="family_container_wrapper">
              <div>
                <img src={Profile} width={35} height={35} />
              </div>
              <div>Sean Michaletz</div>
              <div>
                <Button id="add_member_btn">MEMBER</Button>
              </div>
            </div>
          </div>
          <div className="mt-2 family_list_container list_family">
            <div className="family_container_wrapper">
              <div>
                <img src={Profile} width={35} height={35} />
              </div>
              <div>Sean Michaletz</div>
              <div>
                <Button id="add_member_btn">MEMBER</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyList;
