import styled, { css } from "styled-components";

interface IHeaderProps {
  nav: boolean;
  color: string | undefined;
}

export const StyledHeader = styled.header<IHeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1.5rem;
  z-index: 1;
  gap: 20px;
  min-height: 10vh;
  background-color: var(--color-colors-fixed-white-fixed);
  border-bottom: solid 2px var(--color-grey-scale-grey-5);

  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .home {
    background: linear-gradient(to left, #4529e6, #0b0d0d);
    background-clip: text;
    font-size: 2rem;
    font-weight: 700;
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
          width: 100%;
          gap: 2rem;
        }

        .navDownUser {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background-color: var(--color-colors-fixed-white-fixed);
          border-radius: 10px;
          width: 100%;
          gap: 20px;
          bottom: -146px;
          z-index: 10;

          a {
            color: var(--color-grey-scale-grey-3);
            cursor: pointer;
          }

          & > span {
            color: var(--color-grey-scale-grey-3);
            cursor: pointer;
          }

          span {
            color: var(--color-grey-scale-grey-3);
          }

          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
          }

          div > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }
      `;
    } else {
      return css`
        .navDown {
          display: none;
        }

        .navDownUser {
          display: none;
        }
      `;
    }
  }}

  .navDownUser > div > div {
    ${({ nav, color }) => {
      if (nav && color) {
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
      }
    }}
  }

  .navUp {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .navUpButtons {
    display: none;
  }

  .navUpButtons > a {
    color: var(--color-grey-scale-grey-2);
    font-weight: 600;
    cursor: pointer;
  }

  .navUpButtons > .register {
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--color-colors-fixed-white-fixed);
    border: 2px solid var(--color-grey-scale-grey-3);
  }

  .navUpUser {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .menuIcon {
    display: flex;
  }

  .avatarUp {
    display: none;
  }

  .userMenuUp {
    display: none;
  }

  .navDown > a {
    color: var(--color-grey-scale-grey-2);
    font-weight: 700;
  }

  .navDown > .register {
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    text-align: center;
    color: var(--color-grey-scale-grey-1);
    font-weight: 700;
    background-color: var(--color-colors-fixed-white-fixed);
    border: 2px solid var(--color-grey-scale-grey-3);
  }

  @media (min-width: 550px) {
    .menuIcon {
      display: none;
    }

    .navUpButtons {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      padding: 0 2rem;
    }

    .navDown {
      display: none;
    }

    .avatarUp {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      span {
        color: var(--color-grey-scale-grey-3);
      }

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
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

        span {
          color: var(--color-colors-fixed-white-fixed);
          font-weight: 700;
          text-align: center;
        }
      }
    }

    .userMenuUp {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--color-colors-fixed-white-fixed);
      border-radius: 10px;

      gap: 20px;
      bottom: -146px;
      z-index: 10;

      a {
        color: var(--color-grey-scale-grey-3);
        cursor: pointer;
      }

      span {
        color: var(--color-grey-scale-grey-3);
        cursor: pointer;
      }
    }

    /* .avatarDown {
      display: none;
    } */

    .navDownUser {
      display: none;
    }
  }
`;
