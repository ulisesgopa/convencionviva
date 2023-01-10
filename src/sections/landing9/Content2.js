import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgCB from "../../assets/image/l7/jpg/content2-img-big.jpg";
import imgT from "../../assets/image/l7/jpg/testimonial-1.jpg";
import AblyChatComponent from "../../components/AblyChatComponent";
import Iframe from "../../components/Iframe/Iframe";

const Content = () => {
  return (
    <>
      <div className="content-section pt-15 pb-11 pt-lg-25 pb-lg-24 pt-xl-30 pb-xl-28 position-relative bg-blue dark-mode-texts overflow-hidden">
        <Iframe/>
        <AblyChatComponent/>
      </div>
    </>
  );
};

export default Content;
