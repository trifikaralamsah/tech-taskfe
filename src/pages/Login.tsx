import { Button, Form, Input } from "antd";
import React from "react";
import { imgLogin1, logoTech } from "../assets";
import { useAppDispatch } from "../redux/hooks";
import { loginAdmin } from "../redux/features/authSlice";

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(
          loginAdmin({ username: values.username, password: values.password }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="grid h-screen w-screen place-items-center md:grid-cols-[35%_65%]">
        <div className="hidden h-screen w-full bg-[#F5F6FA] md:block">
          <div className="flex flex-col gap-8 p-12">
            <div className="flex items-center gap-3">
              <img src={logoTech} alt="logo" className="h-10 w-10" />
              <h3>LogoIpsum</h3>
            </div>
            <div className="mt-2">
              <img src={imgLogin1} alt="login" className="w-full" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-2xl font-semibold">Services</h3>
              <p>
                An expert team help you to analyze your polticalt power.An
                expert team.
              </p>
            </div>
          </div>
          <p className="px-6 text-sm">
            ©2024 All Rights Reserved. PT Indonesia Indicator
          </p>
        </div>
        <div className="space-y-4 p-6 sm:p-8 md:w-[500px] md:space-y-5">
          <h1 className="text-2xl font-bold">Welcome to Logo ipsum</h1>
          <p className="text-sm font-light text-gray-800">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign Up
            </a>
          </p>
          <Form
            className="space-y-4 md:space-y-6"
            name="basic"
            layout="vertical"
            autoComplete="off"
            form={form}
            onFinish={() => onSubmit()}
          >
            <Form.Item
              // label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <div>
                <label htmlFor="username" className="text-lg font-semibold">
                  Username <span className="text-lg text-blue-500">*</span>
                </label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Username"
                  style={{ marginTop: "8px" }}
                />
              </div>
            </Form.Item>

            <Form.Item
              // label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <div>
                <label htmlFor="password" className="text-lg font-semibold">
                  Password <span className="text-lg text-blue-500">*</span>
                </label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  style={{ marginTop: "8px" }}
                />
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                style={{ height: "40px" }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
