import { styled } from "styled-components";

export const StyledAdvertCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 10px;
  /* border: 1px black solid; */
  width: 312px;
  height: 350px;

  background-color: var(--color-grey-scale-grey-6);

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
  }

  & > h2 {
    font-size: 1rem;
    font-weight: 700;
  }

  .user {
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .user > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: var(--color-brand-brand-1);
  }

  .user > span {
    color: var(--color-grey-scale-grey-2);
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
  }

  .information > span {
    font-weight: 700;
  }

  .information > div > p {
    padding: 0.5rem;
    font-weight: 500;
    border-radius: 5px;
    background-color: var(--color-brand-brand-4);
    color: var(--color-brand-brand-1);
  }
`;
