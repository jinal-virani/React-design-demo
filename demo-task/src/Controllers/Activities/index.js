import React from "react";
import Button from "react-bootstrap/esm/Button";

import user from "../../Images/users.png";

import "./index.css";

const Activities = ({
  mobileDeviceProps,
  tableDeviceProps,
  leptopDeviceProps,
}) => {
  return (
    <div className="activitie_main">
      <div className="activitie_container">
        {!mobileDeviceProps && (
          <div className="activiti_header">
            <h2>Activities</h2>
            <div className="btn_list">
              <Button id="view_btn">View All</Button>
            </div>
          </div>
        )}
        <div className="mt-2">
          <div className="activiti_list">
            <div className="activiti_img">
              <img
                src={user}
                width={17}
                height={12}
                style={{ margin: "8px" }}
              />
            </div>
            <div className="activiti_text">
              <p className="mb-0">
                Leslie Alexander updated her{" "}
                <span className="activiti_account_type">Account Type</span>
              </p>
              <p className="activiti_time">5 October 11:46 AM</p>
            </div>
          </div>
          <div className="activiti_list">
            <div className="activiti_img">
              <img
                src={user}
                width={17}
                height={12}
                style={{ margin: "8px" }}
              />
            </div>
            <div className="activiti_text">
              <p className="mb-0">
                John Smith removed Mark Fleix from{" "}
                <span className="activiti_account_type">Family member</span>
              </p>
              <p className="activiti_time">5 October 10:01 AM</p>
            </div>
          </div>
          <div className="activiti_list">
            <div className="activiti_img">
              <img
                src={user}
                width={17}
                height={12}
                style={{ margin: "8px" }}
              />
            </div>
            <div className="activiti_text">
              <p className="mb-0">
                Leslie Alexander updated her{" "}
                <span className="activiti_account_type">Account Type</span>
              </p>
              <p className="activiti_time">4 October 11:00 AMM</p>
            </div>
          </div>
          <div className="activiti_list">
            <div className="activiti_img">
              <img
                src={user}
                width={17}
                height={12}
                style={{ margin: "8px" }}
              />
            </div>
            <div className="activiti_text">
              <p className="mb-0">
                John Smith removed Mark Fleix from{" "}
                <span className="activiti_account_type">Family member</span>
              </p>
              <p className="activiti_time">3 October 2:45 PM</p>
            </div>
          </div>
          <div className="activiti_list">
            <div className="activiti_img">
              <img
                src={user}
                width={17}
                height={12}
                style={{ margin: "8px" }}
              />
            </div>
            <div className="activiti_text">
              <p className="mb-0">
                Leslie Alexander updated her{" "}
                <span className="activiti_account_type">Account Type</span>
              </p>
              <p className="activiti_time">3 October 2:45 PM</p>
            </div>
          </div>
          <div className="activiti_list">
            <div className="activiti_img">
              <img
                src={user}
                width={17}
                height={12}
                style={{ margin: "8px" }}
              />
            </div>
            <div className="activiti_text">
              <p className="mb-0">
                John Smith removed Mark Fleix from{" "}
                <span className="activiti_account_type">Family member</span>
              </p>
              <p className="activiti_time">3 October 2:45 PM</p>
            </div>
          </div>
          <div className="activiti_list">
            <div className="activiti_img">
              <img
                src={user}
                width={17}
                height={12}
                style={{ margin: "8px" }}
              />
            </div>
            <div className="activiti_text">
              <p className="mb-0">
                John Smith removed Mark Fleix from{" "}
                <span className="activiti_account_type">Family member</span>
              </p>
              <p className="activiti_time">3 October 2:45 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
