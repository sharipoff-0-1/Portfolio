import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  LogoLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container id="header">
    <Div1>
      <LogoLink
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
        href="#header"
      >
        <DiCssdeck size="3rem" />
        <Span>sharipoff</Span>
      </LogoLink>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/sharipoff-0-1">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/sharipoff.shakh/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/shakhzod-sharipov-854872258/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
