import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  LogoutOutlined,
  MoonOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Menu, Row, theme } from "antd";
import { logoTech } from "../../assets";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);
  const screenWidth = window.innerWidth;
  const [collapsed, setCollapsed] = React.useState(
    screenWidth < 768 ? true : false
  );
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(colorBgContainer);
  const items = [
    {
      key: "/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => {
        navigate("/dashboard");
      },
    },
    {
      key: "/user-management",
      icon: <UserOutlined />,
      label: "User Management",
      onClick: () => {
        navigate("/user-management");
      },
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];

  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={screenWidth < 768 ? 0 : 64}
        >
          <div className="demo-logo-vertical" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px 16px",
              gap: "8px",
            }}
          >
            <img
              alt="logo"
              src={logoTech}
              style={{
                width: 32,
                height: 32,
              }}
            ></img>
            {collapsed ? "" : "LogoIpsum"}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            // defaultSelectedKeys={["1"]}
            selectedKeys={[location.pathname]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              backgroundColor: "#fff",
            }}
          >
            <Row justify="space-between">
              <Col>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    marginRight: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button type="text">
                    <MoonOutlined />
                  </Button>
                  <Menu
                    mode="horizontal"
                    items={[
                      {
                        label: "user?.nama_petugas",
                        key: 1,
                        icon: <UserOutlined />,
                        children: [
                          {
                            label: (
                              <a
                                onClick={() => {}}
                                style={{ fontSize: "15px" }}
                              >
                                <UserOutlined /> Profile
                              </a>
                            ),
                            key: 11,
                          },
                          {
                            label: (
                              <a
                                onClick={() => {}}
                                style={{ fontSize: "15px", color: "red" }}
                              >
                                <LogoutOutlined /> Logout
                              </a>
                            ),
                            key: 12,
                          },
                        ],
                      },
                    ]}
                  />
                </div>
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              margin: "2px 16px",
              padding: 24,
              minHeight: 280,
              //   background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AdminLayout;
