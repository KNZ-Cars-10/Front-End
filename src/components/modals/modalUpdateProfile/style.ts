import { css, styled } from "styled-components";

interface IProps {
  advertiser: boolean;
}

export const StyledModalUpdateProfile = styled.form<IProps>`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  padding: 3rem;
  gap: 15px;
  border-radius: 5px;
  margin: 3rem 0;
  position: absolute;
  top: 0;
  z-index: 10;
  background-color: var(--color-colors-fixed-white-fixed);

  h2 {
    margin: 1rem 0;
  }

  label {
    font-weight: 700;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  input {
    padding: 1rem;
    border: 1px solid var(--color-grey-scale-grey-6);
    width: 100%;
    border-radius: 5px;
  }

  textarea {
    padding: 1rem;
    border: 1px solid var(--color-grey-scale-grey-6);
    width: 100%;
    border-radius: 5px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .buttons > button {
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    min-height: 72px;
    border: 2px solid transparent;
  }

  .buttons > button:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .showPassword {
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    max-width: 100px;
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-brand-brand-1);
    border: 2px solid transparent;
  }

  .showPassword:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .profileImage > div > input {
    cursor: pointer;
  }

  .profileImage > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .profileImage > div > button {
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    max-width: 100px;
    border: 2px solid transparent;
  }

  .profileImage > div > button:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .cancel {
    color: var(--color-grey-scale-grey-2);
    background-color: var(--color-grey-scale-grey-6);
  }

  .delete {
    color: var(--color-feedback-alert-1);
    background-color: var(--color-feedback-alert-2);
  }

  .save {
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-brand-brand-1);
  }

  .accountType {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: 1rem;
  }

  ${({ advertiser }) => {
    if (advertiser) {
      return css`
        .accountType > .advertise {
          padding: 1rem 2rem;
          text-align: center;
          border-radius: 5px;
          width: 100%;
          border: 2px solid var(--color-brand-brand-1);
          color: var(--color-colors-fixed-white-fixed);
          background-color: var(--color-brand-brand-1);
        }

        .accountType > .noAdvertise {
          padding: 1rem 2rem;
          text-align: center;
          border-radius: 5px;
          width: 100%;
          color: var(--color-grey-scale-grey-1);
          background-color: var(--color-colors-fixed-white-fixed);
          border: 2px solid var(--color-grey-scale-grey-3);
        }
      `;
    } else {
      return css`
        .accountType > .advertise {
          padding: 1rem 2rem;
          text-align: center;
          border-radius: 5px;
          width: 100%;
          color: var(--color-grey-scale-grey-1);
          background-color: var(--color-colors-fixed-white-fixed);
          border: 2px solid var(--color-grey-scale-grey-3);
        }

        .accountType > .noAdvertise {
          padding: 1rem 2rem;
          text-align: center;
          border-radius: 5px;
          width: 100%;
          border: 2px solid var(--color-brand-brand-1);
          color: var(--color-colors-fixed-white-fixed);
          background-color: var(--color-brand-brand-1);
        }
      `;
    }
  }}
  @media (min-width: 800px) {
    .accountType {
      flex-direction: row;
    }

    .buttons {
      flex-direction: row;
    }
  }
`;
