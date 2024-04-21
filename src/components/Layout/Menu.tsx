import { Button, Menu } from "antd";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavMenu = ({ mode }: any) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="explore">
        <span style={{ fontWeight: "bold" }}>Home</span>
      </Menu.Item>
      <Menu.Item key="product">Product</Menu.Item>
      <Menu.Item key="blog">Blog</Menu.Item>
      <Menu.Item key="pricing">Pricing</Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
      <Menu.Item key="signIn">
        <span style={{ fontWeight: "bold" }}>Sign In</span>
      </Menu.Item>
      <Menu.Item key="signup">
        <Button type="primary">Sign Up</Button>
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
