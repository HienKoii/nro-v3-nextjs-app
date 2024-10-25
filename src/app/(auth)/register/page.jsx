"use client";
import { PATH_NAME } from "@/lib/path";
import Link from "next/link";
import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { username, password, confirmPassword } = formValues;
    if (!username || !password || !confirmPassword) {
      Swal.fire({
        title: "Thông báo",
        text: "Vui lòng điền đầy đủ thông tin",
        icon: "error",
      });
      setLoading(false);
      return;
    }

    try {
    } catch (error) {
      console.error("Lỗi khi xử lý đăng ký ???");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form>
        <FloatingLabel controlId="floatingUsername" label="Tài khoản" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Tài khoản" //
            name="username"
            value={formValues.username}
            onChange={handleChange}
            autoComplete="username"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Mật khẩu" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password" //
            name="password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingConfirmPassword" label="Nhập lại mật khẩu" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password" //
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </FloatingLabel>

        <div className="d-flex justify-content-center align-items-center">
          <Button
            variant="primary"
            type="submit"
            className="mt-3 text-center" //
            onClick={handleRegister}
            disabled={loading}
          >
            Đăng ký
          </Button>
        </div>

        <div className="mt-3 text-center">
          <span>Bạn chưa đã có tài khoản! </span>
          <Link href={PATH_NAME.login}>Đăng nhập ngay ?</Link>
        </div>
      </Form>
    </>
  );
}
