import React from "react";
import { Col, Row } from "react-bootstrap";
import AblyChat from "../components/AblyChat/AblyChat";
import Iframe from "../components/Iframe/Iframe";

const Product = () => {
  return (
    <>
      <div className="container w-100 mt-20">
      <div>
        
      </div>
        <Row className="row d-flex align-items-center justify-content-center">
          <Col className="col-lg-8 col-md-12 col-sm-12 col-12 col-xl-8">
            <Iframe/>
          </Col>
          <Col className="col-lg-6 col-md-12 col-sm-12 col-12 col-xl-4 mt-20">
            <AblyChat/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
