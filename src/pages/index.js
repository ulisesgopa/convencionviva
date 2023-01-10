import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import CTA2 from "../sections/landing1/CTA2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}>
        <Hero />
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
