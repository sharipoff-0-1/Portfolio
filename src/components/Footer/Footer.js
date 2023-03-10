import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="+48579252963">+48 579-252-963</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href="mailto:sharipoff.dev@gmail.com">
            sharipoff.dev@gmail.com
          </LinkItem>
        </LinkColumn>

        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/sharipoff-0-1">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/sharipoff.shakh/">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/shakhzod-sharipov-854872258/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
