import { css, styled } from "styled-components";

interface ICardProps {
  color: string | undefined;
}

export const StyledAdvertCard = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 10px;
  min-width: 300px;
  max-width: 300px;

  background-color: var(--color-colors-fixed-white-fixed);

  .img {
    cursor: pointer;
  }

  .img > img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    min-height: 200px;
    max-height: 200px;
  }

  & > p {
    color: var(--color-grey-scale-grey-2);
    max-height: 100px;
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

    ${({ color }) => {
      if (color == "1") {
        return css`
          background-color: var(--color-random-random-1);
        `;
      } else if (color == "2") {
        return css`
          background-color: var(--color-random-random-2);
        `;
      } else if (color == "3") {
        return css`
          background-color: var(--color-random-random-3);
        `;
      } else if (color == "4") {
        return css`
          background-color: var(--color-random-random-4);
        `;
      } else if (color == "5") {
        return css`
          background-color: var(--color-random-random-5);
        `;
      } else if (color == "6") {
        return css`
          background-color: var(--color-random-random-6);
        `;
      } else if (color == "7") {
        return css`
          background-color: var(--color-random-random-7);
        `;
      } else if (color == "8") {
        return css`
          background-color: var(--color-random-random-8);
        `;
      } else if (color == "9") {
        return css`
          background-color: var(--color-random-random-9);
        `;
      } else if (color == "10") {
        return css`
          background-color: var(--color-random-random-10);
        `;
      } else if (color == "11") {
        return css`
          background-color: var(--color-random-random-11);
        `;
      } else if (color == "12") {
        return css`
          background-color: var(--color-random-random-12);
        `;
      }
    }}
  }

  .userCard > span {
    color: var(--color-grey-scale-grey-2);
    cursor: pointer;
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
