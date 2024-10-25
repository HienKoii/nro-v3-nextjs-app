"use client";
import { PATH_NAME } from "@/lib/path";
import Link from "next/link";
import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  // Hàm xử lý chung khi người dùng thay đổi bất kỳ trường nào
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formValues;

    if (!username || !password) {
      Swal.fire({
        title: "Thất bại",
        text: "Vui lòng nhập đủ dữ liệu  !!!",
        icon: "error",
        timer: 2000,
      });
      setLoading(false);
      return;
    }
    try {
      // call api
    } catch (error) {
      console.error("Lỗi khi xử lý đăng nhập????");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form>
        <FloatingLabel controlId="floatingInput" label="Tài khoản" className="mb-3">
          <Form.Control
            type="text" //
            placeholder="Tài khoản"
            autoComplete="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Mật khẩu">
          <Form.Control
            type="password"
            placeholder="Mật khẩu" //
            autoComplete="current-password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </FloatingLabel>

        <div className="d-flex justify-content-center align-items-center">
          <Button variant="primary" type="submit" className="mt-3" onClick={handleLogin} disabled={loading}>
            Đăng nhập
          </Button>
        </div>

        <div className="mt-3  text-center">
          <span>Bạn chưa có tài khoản? </span>
          <Link href={PATH_NAME.register}>Đăng ký ngay !</Link>
        </div>
      </Form>
    </>
  );
}
