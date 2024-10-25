import { NAV_DROP_DOWN } from "@/lib/nav";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Button, Image, Nav, NavDropdown } from "react-bootstrap";

export default function AuthLogin() {
  const user = {
    is_admin: true,
    username: "admin",
  };
  return (
    <div>
      <Nav className=" d-flex justify-content-center align-items-center">
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={
            <div className="d-flex flex-column justify-content-center align-items-center gap-1">
              <Image src="/imgs/karin.png" alt="avatar" width={50} height={50} />
              <Button variant="outline-light">
                <span className="text-muted"> Xin chào: </span>
                <span className="text-primary">{user.username}</span>
              </Button>
            </div>
          }
          menuVariant="dark"
          className="custom-dropdown-toggle"
        >
          {NAV_DROP_DOWN.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.isAdmin ? (
                  <>
                    {user.is_admin ? (
                      <NavDropdown.Item as={Link} href={item.path}>
                        <span> {item.icon}</span> <span>{item.name}</span>
                      </NavDropdown.Item>
                    ) : null}
                    <NavDropdown.Divider />
                  </>
                ) : (
                  <NavDropdown.Item as={Link} href={item.path}>
                    <span> {item.icon}</span> <span>{item.name}</span>
                  </NavDropdown.Item>
                )}
              </React.Fragment>
            );
          })}

          <NavDropdown.Item>
            <span>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
            <span> Đăng xuất</span>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
}
