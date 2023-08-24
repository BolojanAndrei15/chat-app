import Sidebar from "@/components/Sidebar";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default DashboardLayout;
