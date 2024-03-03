import { middleFlex } from "@/styles/common";
import { css } from "@emotion/react";

export const adoptionGrid = css`
  --col-num: 2;
  display: grid;
  padding: 0 5%;
  grid-template-columns: repeat(var(--col-num), 1fr);
  place-items: center;
  gap: 50px;
  width: 100%;
  margin-bottom: 10vh;
  position: relative;
  @media screen and (width < 1200px) {
    --col-num: 1;
  }
`;

export const bgImgContainer = css`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  opacity: 0.3;
  filter: sepia(1);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const adoptionWrapper = css`
  ${middleFlex}
  flex-direction: column;
  justify-content: center;
  .adoption-header {
    font-size: 2rem;
  }
  & > span {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
  }
`;

export const adoptionCard = css`
  height: 100%;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #8bbbe9;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  position: relative;
  column-gap: 25px;
  align-items: center;
  overflow: hidden;
  @media screen and (width < 600px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;

export const cardImgContainer = css`
  position: relative;
  height: 250px;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (width < 600px) {
    height: 200px;
    width: 100%;
  }
`;

export const adoptionCardText = css`
  display: flex;
  flex-direction: column;
  z-index: 1;
  span {
    text-transform: capitalize;
  }
  .card-info-pair {
    .card-label {
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
`;
