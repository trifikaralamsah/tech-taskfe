import { Button, Form, Input } from "antd";
import React from "react";
import { imgLogin1, logoTech } from "../assets";

const Login = () => {
  return (
    <React.Fragment>
      <div className="grid w-screen grid-cols-[30%_70%] place-items-center">
        <div className="h-screen w-full bg-[#F5F6FA]">
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
                expert team .
              </p>
            </div>
          </div>
          <p className="px-6 text-sm">
            ©2024 All Rights Reserved. PT Indonesia Indicator
          </p>
        </div>
        <div className="w-[400px] space-y-4 p-6 sm:p-8 md:space-y-5">
          <h1 className="text-xl font-bold">Welcome to Logo ipsum</h1>
          <p className="text-sm font-light text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign Up
            </a>
          </p>
          <Form
            className="space-y-4 md:space-y-4"
            name="basic"
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              // label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Please input valid email!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <label htmlFor="email">
                Email <span className="text-lg text-blue-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                style={{ marginTop: "8px" }}
              />
            </Form.Item>

            <Form.Item
              // label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <label htmlFor="password">
                Password <span className="text-lg text-blue-500">*</span>
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                style={{ marginTop: "8px" }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
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
