"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function PostDetailPage() {
  const { id } = useParams();
  console.log("id", id);
  return <h1 className="fw-bold text-center"> Bài viết số {id} </h1>;
}
