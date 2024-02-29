import { middleFlex } from "@/styles/common";
import { css } from "@emotion/react";

export const adoptionGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  place-items: center;
  padding: 2rem;
  width: 100%;
  & > * {
    border-radius: 10px;
    p {
      /* overflow-wrap: normal; */
    }
  }
`;

export const adoptionWrapper = css`
  ${middleFlex}
  flex-direction: column;
  justify-content: center;
  & > span {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
  }
`;
export const adoptionCard = css`
  height: 100%;
  width: 100%;
  max-height: 55vh;
  .main-para {
    max-height: 4rem;
    overflow: hidden;
    margin: 0;
    font-size: 0.85rem;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    width: 100%;
    line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
