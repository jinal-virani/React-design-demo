import React from "react";
import Button from "react-bootstrap/esm/Button";

import masterCard from "../../Images/mastercard.png";

import "./index.css";

const BankAccounts = ({
  mobileDeviceProps,
  tableDeviceProps,
  leptopDeviceProps,
}) => {
  return (
    <>
      {!mobileDeviceProps && (
        <div className="bank_account_main pb-3">
          <div
            className={
              tableDeviceProps
                ? "title_container bank_account_content"
                : "title_container"
            }
          >
            <div className="">
              <h2>Bank Account</h2>

              <div className="row">
                <div className={tableDeviceProps ? "col-md-8 mb-2" : "col-5"}>
                  <div className="bank_wrapper">
                    <div className="bank_main_img_wrapper">
                      <img src={masterCard} width={57} height={57} />
                    </div>
                    <div className="bank_info_details">
                      <p className="account_number">**** **** **** 5967</p>
                      <p className="expr_number">Expires 09/27</p>
                    </div>
                  </div>
                </div>
                <div className={tableDeviceProps ? "col-md-8" : "col-5"}>
                  <div className="bank_wrapper">
                    <div className="bank_main_img_wrapper">
                      <img src={masterCard} width={57} height={57} />
                    </div>
                    <div className="bank_info_details">
                      <p className="account_number">**** **** **** 5967</p>
                      <p className="expr_number">Expires 09/27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mobileDeviceProps && (
        <div className="row">
          <div className="col-sm-12 mb-3">
            <div className="bank_wrapper_content">
              <div className="bank_main_container">
                <div className="bank_main_img_wrapper">
                  <img src={masterCard} width={57} height={57} />
                </div>
                <div className="bank_info_details">
                  <p className="account_number">**** **** **** 5967</p>
                  <p className="expr_number">Expires 09/27</p>
                </div>
                <div className="bank_main_edit_wrapper">
                  <Button id="edit_btn">Edit</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 mb-3">
            <div className="bank_wrapper_content">
              <div className="bank_main_container">
                <div className="bank_main_img_wrapper">
                  <img src={masterCard} width={57} height={57} />
                </div>
                <div className="bank_info_details">
                  <p className="account_number">**** **** **** 5967</p>
                  <p className="expr_number">Expires 09/27</p>
                </div>
                <div className="bank_main_edit_wrapper">
                  <Button id="edit_btn">Edit</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="bank_wrapper_content">
              <div className="bank_main_container">
                <div className="bank_main_img_wrapper">
                  <img src={masterCard} width={57} height={57} />
                </div>
                <div className="bank_info_details">
                  <p className="account_number">**** **** **** 5967</p>
                  <p className="expr_number">Expires 09/27</p>
                </div>
                <div className="bank_main_edit_wrapper">
                  <Button id="edit_btn">Edit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BankAccounts;
