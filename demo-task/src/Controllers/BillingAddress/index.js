import React from "react";
import Button from "react-bootstrap/esm/Button";

import masterCard from "../../Images/mastercard.png";

import "./index.css";

const BillingAddress = ({ mobileDevice, tableDevice, leptopDevice }) => {
  return (
    <div className="billing_address_main">
      <div className="billing_title_container">
        <div className="billing_content">
          <h2>Billing Address</h2>
          <div>
            <Button id="edit_details">Edit Details</Button>
          </div>
        </div>
        <div className="title_container_wrapper">
          <input
            type="checkbox"
            className="check_details"
            value="abc"
            checked
          />
          <label className="check_label">Same as Home Address</label>
        </div>
        <div className="row form_list">
          <div className="col-6 p-0">
            <div>
              <div className="filed_container_wrapper">
                <label>First Name:</label>
                <div className="input_field">
                  <input type="text" value="John" />
                </div>
              </div>
              <div className="filed_container_wrapper">
                <label>Address Line 1:</label>
                <div className="input_field">
                  <input type="text" value="123 fredline street" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-12">
                <div className="filed_container_wrapper">
                  <label>Country:</label>
                  <div className="input_field">
                    <p>US</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-12">
                <div className="filed_container_wrapper">
                  <label>State/Province/Region:</label>
                  <div className="input_field">
                    <select>
                      <option>Select</option>
                      <option>Surat</option>
                      <option>US</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div>
              <div className="filed_container_wrapper">
                <label>Last Name:</label>
                <div className="input_field">
                  <input type="text" value="Smith" />
                </div>
              </div>
              <div className="filed_container_wrapper">
                <label>Address Line 2:</label>
                <div className="input_field">
                  <input type="text" value="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-12">
                <div className="filed_container_wrapper">
                  <label>City:</label>
                  <div className="input_field">
                    <input type="text" value="" placeholder="Enter city name" />
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-12">
                <div className="filed_container_wrapper">
                  <label>Zip Code:</label>
                  <div className="input_field">
                    <input type="text" value="" placeholder="Enter zip code" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {tableDevice && (
          <div className="btn_edit">
            <Button id="edit_details">Edit Details</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingAddress;
