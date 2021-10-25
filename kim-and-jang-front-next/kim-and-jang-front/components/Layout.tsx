import React from "react";
import Header from "./Header";

const layoutStyle = {
  //   margin: 20,
  //   padding: 20,
  //   border: "1px solid #706f6f",
};

const Layout = (props: any) => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
