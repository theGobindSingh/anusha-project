import { css } from "@emotion/react";

export const headerCss = css`
  --header-col: #8bbbe9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5vh 5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #faf3eb;
  box-shadow: 0 -0.25rem 2rem var(--header-col);
`;

export const logoCss = css`
  border-radius: 50%;
`;

export const hamburgerCss = css`
  --nav-height: 20px;
  --nav-width: 30px;
  --hamburger-line-height: 3px;
  height: var(--nav-height);
  width: var(--nav-width);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  &.hamburger-active {
    .hamburger-lines {
      &:nth-of-type(1) {
        top: 50%;
        transform: translate(0, -50%) rotate(45deg);
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:nth-of-type(3) {
        bottom: 50%;
        transform: translate(0, 50%) rotate(-45deg);
      }
    }
  }
  .hamburger-lines {
    width: 100%;
    height: var(--hamburger-line-height);
    background-color: var(--header-col);
    border-radius: 1em;
    transition: all 0.3s ease;
    transform-origin: center;
    position: absolute;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 50%;
      transform: translate(0, -50%);
    }
    &:nth-of-type(3) {
      bottom: 0;
    }
  }
`;

export const navCss = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-radius: 10px;
  padding: 25px;
  gap: 20px;
  right: 50px;
  transform: translateY(-300px);
  top: 0;
  text-align: center;
  border: 1px solid var(--header-col);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  a {
    color: black;
    text-decoration: none;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    &:hover {
      scale: 1.1;
    }
  }
  &.nav-active {
    transform: translateY(0);
  }
`;
