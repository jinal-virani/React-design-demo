import React from "react";

import Button from "react-bootstrap/Button";

import Profile from "../../Images/upload_pic.png";
import "./index.css";

function ProfileList({
  mobileDeviceProps,
  tableDeviceProps,
  leptopDeviceProps,
}) {
  return (
    <div className="row profile_container">
      <div
        className={
          !mobileDeviceProps && !tableDeviceProps
            ? "col-4 profile_view"
            : "col-md-12 col-sm-12 profile_view_main m-0"
        }
      >
        <div className="avatar-upload">
          <div className="avatar-edit">
            <form action="" method="post" id="form-image">
              <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
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
            <h2 className="account_name">John Smith</h2>
            <p className="account_address">
              <i
                className="fa fa-map-marker"
                aria-hidden="true"
                style={{
                  color: "#818181",
                }}
              ></i>{" "}
              Main St. Farmington, CA 123
            </p>
          </div>
        </div>
      </div>
      {leptopDeviceProps && (
        <div className="col-6">
          <form>
            <div className="row form_content_wrapper">
              <div className="col-6 form_data">
                <div className="form_field_wrapper">
                  <lable className="form_lable">First Name:</lable>
                  <input
                    type="text"
                    className="form_input"
                    value="John"
                  ></input>
                </div>
                <div className="form_field_wrapper">
                  <lable className="form_lable">Last Name:</lable>
                  <input
                    type="text"
                    className="form_input"
                    value="Smith"
                  ></input>
                </div>
                <div className="form_field_wrapper">
                  <lable className="form_lable">Email:</lable>
                  <input
                    type="email"
                    className="form_input"
                    value="johnsmith@yahoo.com"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-6 form_data">
                <div className="form_field_wrapper">
                  <lable className="form_lable">Phone:</lable>
                  <input
                    type="text"
                    className="form_input form_field"
                    value="+1 (324) 234-2342"
                  ></input>
                </div>
                <div className="form_field_wrapper">
                  <lable className="form_lable form_field">
                    Graduation Year:
                  </lable>
                  <input
                    type="number"
                    className="form_input form_field"
                    value="1988"
                  ></input>
                </div>
                <div className="form_field_wrapper">
                  <lable className="form_lable">Date of Birth:</lable>
                  <input
                    type="text"
                    className="form_input form_field"
                    disabled
                    value="08/03/1960"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {tableDeviceProps && (
        <div className="col-md-12">
          <form>
            <div className="row ">
              <div className="col-md-4 p-2 form_data_list_wrapper">
                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">First Name:</lable>
                  <div>
                    <input
                      type="text"
                      className="form_input_type"
                      value="John"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-2 form_data_list">
                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">Last Name:</lable>
                  <div>
                    <input
                      type="text"
                      className="form_input_type"
                      value="Smith"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-2 form_data_list">
                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">Graduation Year:</lable>
                  <div>
                    <input
                      type="number"
                      className="form_input_type"
                      value="1988"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 p-2 form_data_list_wrapper">
                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">Phone:</lable>
                  <div>
                    <input
                      type="text"
                      className="form_input_type"
                      value="+1 (324) 234-2342"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-2 form_data_list_wrapper">
                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">DOB:</lable>
                  <div>
                    <input
                      type="text"
                      className="form_input_type"
                      value="08/03/1960"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {!mobileDeviceProps && (
        <div
          className={
            leptopDeviceProps ? "col-2 all_btn" : "col-12 all_device_btn"
          }
        >
          <Button id="save_changes">Save Changes</Button>
          <Button id="change_password">Change Password</Button>
          <Button id="leave">Leave Family</Button>
        </div>
      )}
      {mobileDeviceProps && (
        <div className="col-sm-12">
          <form>
            <div className="row ">
              <div className="col-sm-6 p-2 form_data_list_wrapper">
                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">First Name:</lable>
                  <div>
                    <input
                      type="text"
                      className="form_input_type"
                      value="John"
                    ></input>
                  </div>
                </div>
                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">Phone:</lable>
                  <div>
                    <input
                      type="text"
                      className="form_input_type"
                      value="+1 (324) 234-2342"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-2 form_data_list">
                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">Last Name:</lable>
                  <div>
                    <input
                      type="text"
                      className="form_input_type"
                      value="Smith"
                    ></input>
                  </div>
                </div>

                <div className="form_field_Contanier_wrapper">
                  <lable className="lable">Graduation Year:</lable>
                  <div>
                    <input
                      type="number"
                      className="form_input_type"
                      value="1988"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {mobileDeviceProps && (
        <div className="col-sm-6">
          <Button id="change_password" style={{ float: "left", width: " 70%" }}>
            Edit Profile
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProfileList;
