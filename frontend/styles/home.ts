import { middleFlex } from "@/styles/common";
import { css } from "@emotion/react";

export const homeWrapper = css`
  ${middleFlex}
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
  .main-heading {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const linkDiv = css`
  ${middleFlex}
  gap: 1rem;
  a {
    button {
      font-weight: 500;
    }
  }
`;
