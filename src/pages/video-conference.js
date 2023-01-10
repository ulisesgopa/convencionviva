import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing7/Hero";
import Rating from "../sections/landing7/Rating";
import Content1 from "../sections/landing7/Content1";
import Content2 from "../sections/landing7/Content2";
import Content3 from "../sections/landing7/Content3";
import Pricing from "../sections/landing7/Pricing";

const VideoConference = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          isFluid: true,
          button: "null", // cta, account, null
        }}
        footerConfig={{
          style: "style", //style1, style2
        }}
      >
        <Hero />
        <Rating />

      </PageWrapper>
    </>
  );
};
export default VideoConference;
