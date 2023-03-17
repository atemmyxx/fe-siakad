import React from "react";
import "./AdminDashboard.css";
import { FaBuffer, FaUsers, FaUserAlt } from "react-icons/fa";

export default function AdminDashboard() {
  return (
    <body>
      <div className={"sidebar"}>
        <div className={"brand"}>
          <h1>
            <FaBuffer />
            Adminisrator
          </h1>
        </div>
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <i>
              <FaUserAlt />
            </i>
            <span>Data Siswa</span>
          </li>
          <li>
            <i> <FaUserAlt /></i>
            <span>
              Data Guru
            </span>
          </li>
        </ul>
      </div>
    </body>
  );
}
