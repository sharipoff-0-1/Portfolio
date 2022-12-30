import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        voluptatum repudiandae iste minus unde eaque.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:sharipoff.dev@gmail.com")}
      >
        Contact me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
