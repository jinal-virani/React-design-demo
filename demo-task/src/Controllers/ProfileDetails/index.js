import React, { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import ProfileList from "../ProfileList";
import BankAccounts from "../BankAccount";
import BillingAddress from "../BillingAddress";
import FamilyList from "../FamilyList";
import Invitations from "../Invitations";
import Activities from "../Activities";
import "./index.css";

const ProfileDetails = ({ mobileDevice, tableDevice, leptopDevice }) => {
  const [key, setKey] = useState("profile");
  console.log(
    "mobileDevice, tableDevice, leptopDevice",
    mobileDevice,
    tableDevice,
    leptopDevice
  );
  return (
    <>
      {leptopDevice && (
        <div className="row details_main">
          <div className="col-8">
            <ProfileList
              mobileDeviceProps={mobileDevice}
              tableDeviceProps={tableDevice}
              leptopDeviceProps={leptopDevice}
            />
            <div className="row pt-3">
              <div className="col-8 p-0">
                <BankAccounts
                  mobileDeviceProps={mobileDevice}
                  tableDeviceProps={tableDevice}
                  leptopDeviceProps={leptopDevice}
                />
                <BillingAddress
                  mobileDeviceProps={mobileDevice}
                  tableDeviceProps={tableDevice}
                  leptopDeviceProps={leptopDevice}
                />
              </div>
              <div className="col-4 p-0 activity_main_list">
                <Activities
                  mobileDeviceProps={mobileDevice}
                  tableDeviceProps={tableDevice}
                  leptopDeviceProps={leptopDevice}
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <FamilyList
              mobileDeviceProps={mobileDevice}
              tableDeviceProps={tableDevice}
              leptopDeviceProps={leptopDevice}
            />
            <Invitations
              mobileDeviceProps={mobileDevice}
              tableDeviceProps={tableDevice}
              leptopDeviceProps={leptopDevice}
            />
          </div>
        </div>
      )}
      {tableDevice && (
        <>
          <div className="row details_main">
            <div className="col-8">
              <ProfileList
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            </div>
            <div className="col-4">
              <FamilyList
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            </div>
          </div>
          <div className="row details_main">
            <div className="col-6">
              <BankAccounts
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            </div>
            <div className="col-6">
              <BillingAddress
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            </div>
          </div>
          <div className="row details_main">
            <div className="col-6">
              <Activities
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            </div>
            <div className="col-6">
              <Invitations
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            </div>
          </div>
        </>
      )}
      {mobileDevice && (
        <div className="row details_main">
          <div className="col-12">
            <div className="tab_menu_list">
              <Tabs
                id="uncontrolled-tab-example"
                className="mb-3 menu_list"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="profile" title="Profile"></Tab>
                <Tab eventKey="wallet" title="Wallet"></Tab>
                <Tab eventKey="activities" title="Activities"></Tab>
                <Tab eventKey="invitations" title="Invitations"></Tab>
              </Tabs>
            </div>
            {key === "profile" && (
              <>
                <FamilyList
                  mobileDeviceProps={mobileDevice}
                  tableDeviceProps={tableDevice}
                  leptopDeviceProps={leptopDevice}
                />
                <ProfileList
                  mobileDeviceProps={mobileDevice}
                  tableDeviceProps={tableDevice}
                  leptopDeviceProps={leptopDevice}
                />
              </>
            )}
            {key === "wallet" && (
              <BankAccounts
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            )}
            {key === "activities" && (
              <Activities
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            )}
            {key === "invitations" && (
              <Invitations
                mobileDeviceProps={mobileDevice}
                tableDeviceProps={tableDevice}
                leptopDeviceProps={leptopDevice}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
