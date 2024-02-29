import { middleFlex } from "@/styles/common";
import { css } from "@emotion/react";

export const listingWrapper = css`
  ${middleFlex}
  flex-direction: column;
  & > span {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
  }
`;

export const listingForm = css`
  ${middleFlex}
  flex-direction: column;
  width: 550px;
  * {
    transition: all 0.3s ease;
  }
  & > div {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > input {
      display: flex;
      margin-left: 1rem;
      width: 100%;
    }
    & > span {
      display: flex;
      margin-left: 1rem;
      width: 100%;
    }
    & > label {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      align-self: flex-start;
    }
  }
  /* & > button {
    width: 25%;
    padding: 12px 0;
    text-decoration: none;
    margin: 2rem 0 3rem 0;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
      border: 2px solid white;
    }
    border: 2px solid gray;
    background-color: transparent;
  } */
`;
export const radioContainer = css`
  ${middleFlex}
  gap: 2rem;
`;
