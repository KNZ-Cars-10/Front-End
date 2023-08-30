import { css, styled } from "styled-components";

interface ICardProps {
  status: boolean | null | undefined;
}

export const StyledAdvertCardProfile = styled.li<ICardProps>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 10px;
  min-width: 300px;
  max-width: 300px;
  min-height: 420px;
  max-height: 500px;
  justify-content: space-between;

  .img {
    position: relative;
  }

  .img > img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    min-height: 200px;
    max-height: 200px;
  }

  .img > span {
    padding: 4px;
    color: var(--color-colors-fixed-white-fixed);
    position: absolute;
    top: 10px;
    left: 10px;

    ${({ status }) => {
      if (status) {
        return css`
          background-color: var(--color-brand-brand-1);
        `;
      } else {
        return css`
          background-color: var(--color-grey-scale-grey-4);
        `;
      }
    }}
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
    background-color: red;
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

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
  }

  .buttons > button {
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    border: solid 2px var(--color-grey-scale-grey-2);
    font-weight: 700;
  }

  .buttons > button:hover {
    border: solid 2px var(--color-brand-brand-1);
  }
`;
