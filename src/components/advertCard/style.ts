import { styled } from "styled-components";

export const StyledAdvertCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 10px;
  min-width: 300px;
  max-width: 300px;
  justify-content: space-between;
  min-height: 430px;
  max-height: 430px;

  .img {
    cursor: pointer;
    border: solid 2px transparent;
    height: 200px;
    border-radius: 5px;
  }

  .img:hover {
    border: 2px solid var(--color-brand-brand-1);
  }

  .img > img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    min-height: 196px;
    max-height: 196px;
  }

  & > p {
    color: var(--color-grey-scale-grey-2);
    max-height: 100px;
    overflow: auto;
  }

  & > h2 {
    font-size: 1rem;
    font-weight: 700;
  }

  .userCard {
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .userCard > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  .userCard > div > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .userCard > span {
    color: var(--color-grey-scale-grey-2);
    cursor: pointer;
  }

  .userCard > span:hover {
    color: var(--color-brand-brand-1);
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
