"use client";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, ListGroup, OverlayTrigger, Tooltip, Image } from "react-bootstrap";

export default function NapAtmPage() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      copy
    </Tooltip>
  );
  return (
    <div>
      <>
        <Row>
          <Col xs={12}>
            <div style={{ minHeight: "300px" }} className="d-flex justify-content-center align-items-center mt-3">
              <Image
                src={`https://img.vietqr.io/image/TPB-95021809564-compact.png?addInfo=1%20$admin`} //
                alt="atm"
                width={220}
              />
            </div>
          </Col>
          <Col xs={12} className="mt-3">
            <ListGroup as="ul">
              <ListGroup.Item as="li" className="d-flex align-items-center gap-2">
                <strong className="text-danger">Tên ngân hàng:</strong>
                <strong className="text-primary">TPB</strong>
              </ListGroup.Item>

              <ListGroup.Item as="li" className="d-flex align-items-center gap-2">
                <strong className="text-danger">STK :</strong>
                <strong className="text-primary">95021809564</strong>
                <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                  <FontAwesomeIcon
                    icon={faCopy}
                    style={{ padding: "0 12px", cursor: "pointer" }} ///
                    onClick={() => handleCopy(95021809564)}
                  />
                </OverlayTrigger>
              </ListGroup.Item>

              <ListGroup.Item as="li" className="d-flex align-items-center gap-2">
                <strong className="text-danger">Tên bank:</strong>
                <strong className="text-primary">Nguyen Kim Hien</strong>
              </ListGroup.Item>

              <ListGroup.Item as="li" className="d-flex align-items-center gap-2">
                <strong className="text-danger">Nội Dung Chuyển:</strong>
                <strong className="text-primary">1 admin</strong>
                <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                  <FontAwesomeIcon
                    icon={faCopy}
                    style={{ padding: "0 12px", cursor: "pointer" }} ///
                  />
                </OverlayTrigger>
              </ListGroup.Item>
            </ListGroup>
            <div className="mt-2 text-center text-danger fw-bold">*Lưu ý: Nhớ chụp lại bill để tránh trường hợp lỗi nạp. Nếu lỗi vui lòng ib gửi bill cho key vàng để xử lý !</div>
          </Col>
        </Row>
      </>
    </div>
  );
}
