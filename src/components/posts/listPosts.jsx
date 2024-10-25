import Link from "next/link";
import React from "react";
import { Image, ListGroup } from "react-bootstrap";

export default function ListPosts() {
  const items = Array(5).fill({
    id: null, // Hoặc có thể sử dụng id khác nhau cho từng item
    avatar: "/imgs/karin.png",
    name: "Accordion Item",
  });

  return (
    <>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item
            key={index} //
            as={Link}
            href={`post/${index + 1}`}
            style={{ backgroundColor: "#fce5e5" }}
            className="hk-flex-x"
          >
            <div className="border border-dark border-2 p-1 rounded bg-secondary">
              <Image src={item.avatar} width={50} height={50} alt="avatar" />
            </div>
            <p className="mx-1 fw-bold">
              {item.name} {index + 1}
            </p>
            <Image src="/imgs/new.gif" alt="new" width={23} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
