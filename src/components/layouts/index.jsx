import React from "react";
import MainNavigation from "./main-navigation";

function MainLayout({ children }) {
  return (
    <>
      <MainNavigation />

      {/* Main Content */}
      <main className="!mt-[6px]">{children}</main>
    </>
  );
}

export default MainLayout;
