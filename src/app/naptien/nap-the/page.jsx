"use client";
import { MD5 } from "crypto-js";
import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function NapThePage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    mathe: "",
    seri: "",
    loaithe: "",
    menhgia: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = PATHS.login;
      return;
    }

    if (!formData.mathe || !formData.seri || !formData.loaithe || !formData.menhgia) {
      Swal.fire({
        title: "Thất bại!",
        text: "Vui lòng nhập đủ thông tin",
        icon: "error",
      });
      return;
    }
    try {
      const code = uuidv4();
      const partnerId = auto_card.partnerId;
      const partnerKey = auto_card.partnerKey;

      const signature = MD5(partnerKey + formData.mathe + formData.seri).toString();

      const infoCard = {
        sign: signature,
        telco: formData.loaithe,
        code: formData.mathe,
        serial: formData.seri,
        amount: formData.menhgia,
        request_id: code,
        partner_id: partnerId,
        command: "charging",
      };
      console.log("infoCard", infoCard);
      try {
        const res = "";
        if (res.data) {
          // console.log("res", res);
          Swal.fire({
            title: `${res.data.status === "success" ? "Thành công" : "Thất bại"}`,
            text: res.data.message,
            icon: res.data.status,
          });
          setFormData({
            mathe: "",
            seri: "",
            loaithe: "",
            menhgia: "",
          });
        }
      } catch (error) {
        console.log("error postThe", error);
      } finally {
        setLoading(false);
      }
    } catch (error) {
      console.log("error postThe", error);
    }
  };
  return (
    <>
      <h2>Nạp thẻ</h2>
      <form onSubmit={handleSubmit} className="p-3">
        {/* Loại thẻ (selector) */}
        <FloatingLabel controlId="loaithe" label="Loại thẻ" className="mb-3">
          <Form.Select name="loaithe" value={formData.loaithe} onChange={handleChange}>
            <option value="">Chọn loại thẻ</option>
            <option value="VIETTEL">Viettel</option>
            <option value="VINAPHONE">Vinaphone</option>
            <option value="MOBIFONE">Mobifone</option>
          </Form.Select>
        </FloatingLabel>

        {/* Mệnh giá (selector) */}
        <FloatingLabel controlId="menhgia" label="Mệnh giá" className="mb-3">
          <Form.Select name="menhgia" value={formData.menhgia} onChange={handleChange}>
            <option value="">Chọn mệnh giá</option>
            <option value="10000">10.000 VND</option>
            <option value="20000">20.000 VND</option>
            <option value="50000">50.000 VND</option>
            <option value="100000">100.000 VND</option>
            <option value="200000">200.000 VND</option>
            <option value="500000">500.000 VND</option>
          </Form.Select>
        </FloatingLabel>

        {/* Mã thẻ */}
        <FloatingLabel controlId="mathe" label="Mã thẻ" className="mb-3">
          <Form.Control type="text" name="mathe" placeholder="Nhập mã thẻ" value={formData.mathe} onChange={handleChange} required />
        </FloatingLabel>

        {/* Số seri */}
        <FloatingLabel controlId="seri" label="Số Seri" className="mb-3">
          <Form.Control type="text" name="seri" placeholder="Nhập số seri" value={formData.seri} onChange={handleChange} required />
        </FloatingLabel>

        {/* Nút nạp thẻ */}
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="primary" type="submit" disabled={loading}>
            Nạp thẻ
          </Button>
        </div>
      </form>
    </>
  );
}
