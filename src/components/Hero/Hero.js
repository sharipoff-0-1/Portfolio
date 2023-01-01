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
        Portfolio
      </SectionTitle>
      <SectionText>
        I'm a FrontEnd developer based in Warsaw, Poland
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:sharipoff.dev@gmail.com")}
      >
        Get in touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
