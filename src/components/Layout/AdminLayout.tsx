import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DatabaseOutlined,
  UserOutlined,
  LogoutOutlined,
  MoonOutlined,
  SunOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Menu, Row, theme } from "antd";
import { logoTech } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/authSlice";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const screenWidth = window.innerWidth;
  const [collapsed, setCollapsed] = React.useState(
    screenWidth < 768 ? true : false,
  );
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
      icon: <DatabaseOutlined />,
      label: "User Management",
      onClick: () => {
        navigate("/user-management");
      },
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Profile",
      onClick: () => {
        navigate("/profile");
      },
    },
  ];

  const onHandleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  React.useEffect(() => {
    setCollapsed(screenWidth < 768 ? true : false);
  }, [location, screenWidth]);

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
              color: "#fff",
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
                  <Button
                    type="text"
                    style={{ marginBottom: "22px" }}
                    onClick={() => toggleDarkMode()}
                  >
                    {darkMode ? (
                      <SunOutlined style={{ fontSize: "20px" }} />
                    ) : (
                      <MoonOutlined style={{ fontSize: "20px" }} />
                    )}
                  </Button>
                  <Menu
                    style={{
                      width: "150px",
                      margin: "8px 0px 8px -10px",
                    }}
                    mode="horizontal"
                    items={[
                      {
                        // label: user?.username,
                        key: 1,
                        icon: (
                          <div className="flex gap-2">
                            <img
                              src={user?.image}
                              className="w-10 rounded-full"
                              alt="avatar"
                            />
                            <span className="ml-2">{user?.firstName}</span>
                          </div>
                        ),
                        children: [
                          {
                            label: (
                              <div className="w-full bg-white px-3">
                                <a
                                  onClick={() => navigate("/profile")}
                                  style={{ fontSize: "15px" }}
                                >
                                  <UserOutlined /> Profile
                                </a>
                              </div>
                            ),
                            key: 11,
                          },
                          {
                            label: (
                              <div className="w-full bg-white px-3">
                                <a
                                  onClick={() => onHandleLogout()}
                                  style={{ fontSize: "15px", color: "red" }}
                                >
                                  <LogoutOutlined /> Logout
                                </a>
                              </div>
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
