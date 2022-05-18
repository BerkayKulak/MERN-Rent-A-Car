import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col span={16} style={{ position: "relative" }}>
          <img
            className="w-100"
            data-aos="slide-right"
            data-aos-duration="1500"
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          />
          <h1 className="login-logo">RENT A CAR</h1>
        </Col>
        <Col span={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5">
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <button className="btn1 mt-2 mb-3">Register</button>
            <br />
            <Link to="/login">Click Here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
