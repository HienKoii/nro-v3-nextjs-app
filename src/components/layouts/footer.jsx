import { BoxPage } from "@/app/styles/stylesGlobals";
import React from "react";

export default function Footer() {
  return (
    <BoxPage className="text-center mt-3">
      <h5>Ngọc rồng online</h5>
      <h6>
        2024 © Web được code bởi <span style={{ textDecoration: "underline", color: "red" }}>HK</span>{" "}
      </h6>
      <p>Nhận code web theo yêu cầu</p>
      <p className="text-primary fw-bold">Zalo: 0979514602</p>
    </BoxPage>
  );
}
