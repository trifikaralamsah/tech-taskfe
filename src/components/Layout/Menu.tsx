import { Button, Menu } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavMenu = ({ mode }: any) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const screenWidth = window.innerWidth;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Menu mode={mode}>
      <Menu.Item key="home" onClick={() => navigate("/")}>
        <div className="md:px-1" onClick={() => navigate("/")}>
          <span
            className={`${pathname === "/about-us" && screenWidth > 768 && "text-[#fff]"} ${pathname === "/" && "font-bold text-black"}`}
          >
            Home
          </span>
        </div>
      </Menu.Item>
      <Menu.Item key="product">
        <span
          className={`${pathname === "/about-us" && screenWidth > 768 && "text-[#fff]"}`}
        >
          Product
        </span>
      </Menu.Item>
      <Menu.Item key="blog">
        <span
          className={`${pathname === "/about-us" && screenWidth > 768 && "text-[#fff]"}`}
        >
          Blog
        </span>
      </Menu.Item>
      <Menu.Item key="pricing">
        <span
          className={`${pathname === "/about-us" && screenWidth > 768 && "text-[#fff]"}`}
        >
          Pricing
        </span>
      </Menu.Item>
      <Menu.Item key="about">
        <div className="md:px-1" onClick={() => navigate("/about-us")}>
          <span
            className={`${pathname === "/about-us" && screenWidth > 768 && "font-bold text-[#fff]"}`}
          >
            About Us
          </span>
        </div>
      </Menu.Item>
      <Menu.Item key="contact">
        <span
          className={`${pathname === "/about-us" && screenWidth > 768 && "text-[#fff]"}`}
        >
          Contact Us
        </span>
      </Menu.Item>
      <Menu.Item key="signIn" style={{ marginLeft: "auto" }}>
        <div onClick={() => navigate("/login")}>
          <span className="font-semibold">
            <span
              className={`${pathname === "/about-us" && screenWidth > 768 && "text-[#fff]"}`}
            >
              Sign In
            </span>
          </span>
        </div>
      </Menu.Item>
      <Menu.Item key="signup">
        <Button
          type="default"
          style={{
            width: "140px",
            border: "1.5px solid #1890ff",
            borderRadius: "14px",
          }}
        >
          <span className="font-semibold text-[#1890ff]">Sign Up</span>
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
