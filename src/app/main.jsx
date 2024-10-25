"use client";
import React from "react";
import { BoxPage, ContainerMain } from "./styles/stylesGlobals";
import Header from "@/components/layouts/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/layouts/footer";

export default function RootMain({ children }) {
  return (
    <ContainerMain className="container-md p-1 col-sm-12 col-lg-6">
      <Header />
      <Navigation />
      <BoxPage>{children}</BoxPage>
      <Footer />
    </ContainerMain>
  );
}
