import styled, { css } from "styled-components";

interface IHeaderProps {
  nav: boolean;
  color: string | undefined | null;
}

export const StyledHeader = styled.header<IHeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.5rem;
  z-index: 5;
  position: relative;
  gap: 20px;
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

  .home > span {
    font-size: 1rem;
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
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          background-color: var(--color-colors-fixed-white-fixed);
          border-radius: 10px;
          width: 100%;
          gap: 20px;
          bottom: -146px;
          z-index: 10;
        }
        .navDownUser > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          gap: 10px;
        }

        .navDownUser a {
          color: var(--color-grey-scale-grey-3);
          cursor: pointer;
        }

        .navDownUser > p {
          color: var(--color-grey-scale-grey-3);
          cursor: pointer;
        }

        .navDownUser > div > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .navDownUser > div > div > img {
          border-radius: 50%;
          height: 100%;
          width: 100%;
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

  .userMenuDown {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-grey-scale-grey-7);
    border-radius: 10px;
    position: absolute;
    gap: 20px;
    padding: 1rem;
    bottom: -130px;
    z-index: 5;

    a {
      color: var(--color-grey-scale-grey-3);
      cursor: pointer;
    }

    span {
      color: var(--color-grey-scale-grey-3);
      cursor: pointer;
    }
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

  a:hover {
    color: var(--color-brand-brand-1);
  }

  p:hover {
    color: var(--color-brand-brand-1);
  }

  .navDownUser > span:hover {
    color: var(--color-brand-brand-1);
  }

  @media (min-width: 550px) {
    .menuIcon {
      display: none;
    }

    .userMenuDown {
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

        span {
          color: var(--color-colors-fixed-white-fixed);
          font-weight: 700;
          text-align: center;
        }
      }
      div > img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }

    .userMenuUp {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--color-grey-scale-grey-7);
      border-radius: 10px;
      position: absolute;
      gap: 20px;
      padding: 1rem;
      bottom: -120px;
      z-index: 5;

      a {
        color: var(--color-grey-scale-grey-3);
        cursor: pointer;
      }

      span {
        color: var(--color-grey-scale-grey-3);
        cursor: pointer;
      }
    }

    a:hover {
      color: var(--color-brand-brand-1);
    }

    .userMenuUp > span:hover {
      color: var(--color-brand-brand-1);
    }

    .navDownUser {
      display: none;
    }
  }
`;
