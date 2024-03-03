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

export const radioBtnsContainer = css`
  display: flex;
  width: 100%;
  gap: 15%;
  label {
    font-size: 1.25rem;
    margin-left: 5px;
    text-transform: capitalize;
  }
  padding-bottom: 10px;
`;

export const listingForm = css`
  ${middleFlex}
  flex-direction: column;
  width: 550px;
  margin-bottom: 5vh;
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
      border: 2px solid #8bbbe9;
      background: transparent;
      padding: 10px;
      border-radius: 5px;
      width: 100%;
      font-size: 1.2rem;
    }
    & > span {
      display: flex;
      width: 100%;
    }
    & > label {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      align-self: flex-start;
    }
  }
  @media screen and (width < 600px) {
    width: 90%;
  }
`;
export const radioContainer = css`
  ${middleFlex}
  gap: 2rem;
`;

export const submitBtn = css`
  padding: 10px 25px;
  border-radius: 500px;
  border: none;
  background-color: #8bbbe9;
  color: black;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 2vh 0;
`;
