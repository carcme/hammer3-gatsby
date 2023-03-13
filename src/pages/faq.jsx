import React from "react";
import Layout from "../components/Layout";
import Accordion from "../components/Accordion/Accordion";
import A from "../components/AA/A";
import { accordionData } from "../constants/accordianData";

const Faq = () => {
  return (
    <Layout>
      <div style={{ paddingTop: "15rem" }}>
        <h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.0,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ color: "red" }}
        >
          Image to go here
        </h1>
      </div>
      {/* <A json={accordionData} /> */}
      <Accordion json={accordionData} />
    </Layout>
  );
};

export default Faq;
