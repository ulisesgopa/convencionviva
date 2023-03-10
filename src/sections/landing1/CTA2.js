import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <div className="cta-section-2 dark-mode-texts bg-blackish-blue ">
      <Container>
        <div className="cta-wrapper pt-14 pb-14 py-lg-19 border-bottom">
          <Row className="align-items-center justify-content-center">
            <Col lg="6" md="10">
              <div className="cta-text section-title">
                <h2 className="title gr-text-5 mb-7 text-white">
                  Estas listo para una experiencia inolvidable
                </h2>
                <p className="gr-text-8 gr-color-white-opacity-7 mb-8 mb-lg-0">

                </p>
              </div>
            </Col>
            <Col lg="4" md="10" className="offset-lg-2">
              <div className="cta-btn text-lg-right">
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default CTA;
