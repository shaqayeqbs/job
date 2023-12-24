import React from "react";
import MainNavigation from "./main-navigation";
import { Outlet } from "react-router-dom/dist";
function MainLayout() {
  return (
    <div>
      <MainNavigation />

      {/* Main Content */}
      <main className="  mt-3">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
