import React from "react";
import Layout from "../components/Layout";
import BannerModule from "../components/BannerModule/BannerModule";
import Concept from "../components/Concept/Concept";
import IconPack from "../components/IconPack/IconPack";
import Testimonial from "../components/Testimonial/Testimonial";
import Players from "../components/Players/Players";
import Subscribe from "../components/Subscribe/Subscribe";

import { expectData } from "../constants/expectation";

const IndexPage = () => {
  return (
    <Layout>
      <BannerModule title="Eat Drink Murder" subTitle="" />
      <Concept />
      <IconPack json={expectData} autoplay={false} scrollThreshold={950} />
      <Testimonial />
      <Players />
      <Subscribe />
    </Layout>
  );
};

export default IndexPage;
