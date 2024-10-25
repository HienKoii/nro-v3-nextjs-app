"use client";
import React from "react";
import { ContainerMain } from "./styles/stylesGlobals";

export default function RootMain({ children }) {
  return <ContainerMain className="container-md p-1 col-sm-12 col-lg-6">{children}</ContainerMain>;
}
