import { styled } from "styled-components";

export const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 10px;
  width: 312px;
  height: 356px;
  background-color: var(--color-grey-scale-grey-6);
  position: relative;

  .img > img {
    height: 100%;
    width: 100%;
    max-height: 152px;
    max-width: 312px;
  }

  & > p {
    text-align: left;
    color: var(--color-grey-scale-grey-2);
    max-height: 100px;
    min-height: 40px;
    font-size: 14px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    line-height: 24px;
    margin-top: 10px;
  }

  & > h2 {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    line-height: 20px;
    color: var(--color-grey-scale-grey-1);
  }

  .information {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    text-align: center;
  }

  .information > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
  }

  .information > span {
    font-weight: 500;
    font-family: "Lexend", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-grey-scale-grey-1);
    margin-top: 14px;
  }

  .information > div > p {
    padding: 0.5rem;
    font-weight: 500;
    border-radius: 5px;
    background-color: var(--color-brand-brand-4);
    color: var(--color-brand-brand-1);
    font-size: 14px;
    font-family: "Inter", sans-serif;
    margin-top: 4px;
  }

  .buttons {
    display: flex;
    gap: 16px;
    margin-top: 6px;
  }

  .editButton {
    width: 80px;
    height: 38px;
    border: 1px solid var(--color-grey-scale-grey-1);
    border-radius: 4px;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
  }

  .detailsButton {
    width: 126px;
    height: 38px;
    border: 1px solid var(--color-grey-scale-grey-1);
    border-radius: 4px;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
  }

  .isActiveTrue{
    width: 51px;
    height: 24px;
    background-color: var(--color-brand-brand-1);
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    position: absolute;
    margin-top: 11px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px
  }

  .isActiveFalse {
    width: 61px;
    height: 24px;
    background-color: var(--color-grey-scale-grey-4);
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    position: absolute;
    margin-top: 11px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px
  }
`;
