import { Button, Menu } from "antd";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavMenu = ({ mode }: any) => {
  return (
    <Menu mode={mode} style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Menu.Item key="explore">
        <span className="font-semibold">Home</span>
      </Menu.Item>
      <Menu.Item key="product">Product</Menu.Item>
      <Menu.Item key="blog">Blog</Menu.Item>
      <Menu.Item key="pricing">Pricing</Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
      <Menu.Item key="signIn">
        <span className="font-semibold md:ml-6">Sign In</span>
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
