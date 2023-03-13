import React from "react";
import Layout from "../components/Layout";
import Hosts from "../components/Hosts/Hosts";
import IconPack from "../components/IconPack/IconPack";
import SimpleSlider from "../components/SlickSlider/SimpleSlider";
import Slide from "../components/SlickSlider/Slide";

import { howToPlayData } from "../constants/how-to-play";
import { hostsData } from "../constants/hosts";

const About = () => {
  return (
    <Layout>
      <IconPack json={howToPlayData} autoplay={true} scrollThreshold={-1} />
      <Hosts json={hostsData} />
      <SimpleSlider />
    </Layout>
  );
};

export default About;
