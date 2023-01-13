import React, { useState, useEffect } from "react";

import NavBar from "../../Controllers/Navbar";
import ProfileDetails from "../../Controllers/ProfileDetails";

import AccountDetails from "../../Controllers/AccountDetails";
import "./index.css";

function HomePage() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768 && width >= 320;
  const isTablet = width < 1024 && width > 767;
  const isBigScreen = width > 1023;

  return (
    <div className={isMobile ? "main_content" : ""}>
      <NavBar
        mobileDevice={isMobile}
        tableDevice={isTablet}
        leptopDevice={isBigScreen}
      />

      {!isTablet && (
        <AccountDetails
          mobileDevice={isMobile}
          tableDevice={isTablet}
          leptopDevice={isBigScreen}
        />
      )}

      <ProfileDetails
        mobileDevice={isMobile}
        tableDevice={isTablet}
        leptopDevice={isBigScreen}
      />
    </div>
  );
}

export default HomePage;
