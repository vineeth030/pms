import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
      <>
        <Navbar />

        <div class="flex h-screen">
          <div class="flex-none h-screen w-64">
            <ul class="menu bg-base-300 h-screen w-56">
              <li><a>Patients</a></li>
              <li><a class="active">Reports</a></li>
              <li><a>Appointments</a></li>
            </ul>
          </div>
          <div class="flex-1">
            <Outlet />
          </div>
        </div>

      </>
    );
}

export default DashboardLayout;