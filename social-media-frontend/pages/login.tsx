import { Button, Form, Input } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { login } from "../core/services/auth.service";
import AuthLayout from "../layout/AuthLayout";

const Login: NextPage = () => {
  const router = useRouter();
  const [err, setErr] = useState(false);
  const [form] = Form.useForm();
  const handleSubmit = (values: any): void => {
    login(values)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        router.push("/profile/" + values.username);
      })
      .catch((err) => {
        setErr(true);
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>Log in | Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout>
        <img className="mb-4" src="/twitter.png" alt="" />
        <h1 className="text-5xl font-bold">Welcome back!</h1>
        <div className="form-wrapper w-7/12 pt-14">
          <Form onFinish={handleSubmit} form={form} layout="vertical">
            <Form.Item
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              name={"username"}
              label="Username"
            >
              <Input placeholder="Enter your username" />
            </Form.Item>
            <Form.Item
              name={"password"}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              label="Password"
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            {err && (
              <div className="text-red-500 mb-5">
                Username or password might wrong
              </div>
            )}
            <Form.Item>
              <div className="flex items-center gap-3">
                <Button htmlType="submit" className="primary-btn">
                  Login
                </Button>
                <span
                  onClick={() => {
                    router.push("/signup");
                  }}
                  className="text-xs cursor-pointer text-blue-400"
                >
                  Don't have an accouunt
                </span>
              </div>
            </Form.Item>
          </Form>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
