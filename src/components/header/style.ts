import styled, { css } from "styled-components";

interface IHeaderProps {
  nav: boolean;
}

export const StyledHeader = styled.header<IHeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1rem;
  gap: 20px;
  background-color: var(--color-colors-fixed-white-fixed);

  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  h1 {
    background: linear-gradient(to left, #4529e6, #0b0d0d);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  ${({ nav }) => {
    if (nav) {
      return css`
        .navDown {
          display: flex;
          flex-direction: column;
          align-self: flex-start;
          width: 100%;
          gap: 2rem;
        }
      `;
    } else {
      return css`
        .navDown {
          display: none;
        }
      `;
    }
  }}

  .navUp {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .navUpButtons {
    display: none;
  }

  .navUpButtons > span {
    color: var(--color-grey-scale-grey-2);
    font-weight: 600;
  }

  .navUpButtons > span:hover {
    color: var(--color-grey-scale-grey-0);
    cursor: pointer;
  }

  .navUpButtons > button {
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--color-colors-fixed-white-fixed);
    border: 2px solid var(--color-grey-scale-grey-3);
  }

  .navUpButtons > button:hover {
    color: var(--color-grey-scale-grey-0);
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .navDown > span {
    color: var(--color-grey-scale-grey-2);
    font-weight: 600;
  }

  .navDown > button {
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--color-colors-fixed-white-fixed);
    border: 2px solid var(--color-grey-scale-grey-3);
  }

  .navDown > button:hover {
    color: var(--color-grey-scale-grey-0);
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .menuIcon {
    display: flex;
  }

  @media (min-width: 770px) {
    .menuIcon {
      display: none;
    }

    .navUpButtons {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      padding: 0 2rem;
      /* border-left: 2px solid var(--color-grey-scale-grey-3); */
    }

    .navDown {
      display: none;
    }
  }
`;
