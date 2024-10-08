import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
      <>
        <Navbar />

        <div class="flex h-screen">
          <div class="flex-none h-screen w-64">
            <ul class="menu bg-base-300 h-screen w-56">
              <li>
                <Link to="/patients"  className={ isActive('/patients') ? 'active' : '' }>Patients</Link>
              </li>
              <li>
                <Link to="/reports"  className={ isActive('/reports') ? 'active' : '' }>Reports</Link>
              </li>
              <li>
                <Link to="/appointments"  className={ isActive('/appointments') ? 'active' : '' }>Appointments</Link>
              </li>
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