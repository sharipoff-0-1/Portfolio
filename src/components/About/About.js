import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => (
  <Section id="about">
    <SectionDivider />
    <SectionTitle nopadding main>
      Who I Am
    </SectionTitle>
    <SectionText nopadding>
      I'm a web developer based out of Warsaw, Poland. I love building apps that
      solve real-world problems, and that are delightful to use. My specialities
      include Next JS, React JS, Tailwind CSS, and Styled Components.
    </SectionText>
  </Section>
);

export default About;
