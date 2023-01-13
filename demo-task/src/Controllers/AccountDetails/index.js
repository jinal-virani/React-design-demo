import React from "react";

import Button from "react-bootstrap/Button";
import "./index.css";

function AccountDetails({ mobileDevice, tableDevice, leptopDevice }) {
  return (
    <div className="row profile_main">
      <div className="col-8 col-sm-12 account_main_list">
        <div className="col-2 col-md-4 profile_name">My Account</div>
        {mobileDevice && (
          <div className="account_content_list">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>
        )}
        {leptopDevice && (
          <>
            <div className="col-6 col-md-4 success_msg">
              <div className="msg">Success Message Here</div>
            </div>
            <div className="col-2 col-md-4">
              {" "}
              <div className="view_btn">
                <Button>View Button</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AccountDetails;
