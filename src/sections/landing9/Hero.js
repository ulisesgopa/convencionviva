import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgP from "../../assets/image/l7/png/banner-product-img.png";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative pt-25 pt-lg-31 pb-15 pb-lg-15 bg-default-6">

      </div>
    </>
  );
};

export default Hero;
