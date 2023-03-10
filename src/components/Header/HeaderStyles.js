import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2.2rem;
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  transition: all 0.2s;
  font-size: 1.8rem;
  padding: 1rem 0;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  position: relative;
  display: inline-block;
  padding: 1rem 0;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 1.8rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  &:hover {
    color: #00dab0;
    opacity: 1;
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    display: inline-block;
    height: 1rem;
    background: #00dab0;
    transition: all 0.25s cubic-bezier(1, 0.68, 0.16, 0.9);
  }
  &:hover::after {
    right: 0;
    height: 2px;
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50%;
  padding: 7px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
