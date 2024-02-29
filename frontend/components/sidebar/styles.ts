import { css } from "@emotion/react";

export const mainSidebar = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 50px;
  background-color: red;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  & > a {
    width: 40px;
    & > span {
      width: 40px;
    }
    .text {
      /* display: inline-block; */

      width: 0;
    }
  }
`;

export const sidebarLogoContainer = css`
  display: flex;
  width: 40px;
  & > * {
    flex-shrink: 0;
  }
`;
