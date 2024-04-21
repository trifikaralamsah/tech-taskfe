import React, { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import NavMenu from "./Menu";
import { logoTech } from "../../assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  const { pathname: location } = useLocation();
  React.useEffect(() => {
    setVisible(false);
  }, [location]);
  // Upto here

  return (
    <nav className="navbar md:px-24">
      <Layout>
        <Layout.Header className="nav-header">
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <img src={logoTech} alt="logo" style={{ width: 40, height: 40 }} />
            <h3 className="brand-font font-bold">LogoIpsum</h3>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              <NavMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu">
              {/* <NavMenu mode={"horizontal"} /> */}
            </div>

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}
            >
              <NavMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
