import React from "react";
import { LayoutType } from "@/types/App";
import NavBar from "./Layout/NavBar";

const Layout = ({
  children,
  className = "",
}:LayoutType) => {

  return (
    <div className="Layout">
      <main
        className={className}
      >
        <NavBar  />
        <div className="Layout_Children">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
