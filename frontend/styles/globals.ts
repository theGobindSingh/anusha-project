import { css } from "@emotion/react";
export const globals = css`
  body {
    margin: 0;
    padding: 0;
    background-color: var(--surface-ground);
    font-family: "Inter";
    background: url("/images/paws-bg.jpg") no-repeat center;
    background-size: cover;
  }
  * {
    box-sizing: border-box;
  }
  .page-wrapper {
    width: 100%;
    padding-top: 12.5vh;
  }
`;
