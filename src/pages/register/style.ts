import { css, styled } from "styled-components";

interface IRegisterProps {
  advertiser: boolean;
}

export const StyledRegister = styled.div<IRegisterProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  background-color: var(--color-grey-scale-grey-7);

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    padding: 3rem;
    gap: 15px;
    border-radius: 5px;
    margin: 3rem 0;
    background-color: var(--color-colors-fixed-white-fixed);
  }

  h2 {
    margin: 1rem 0;
  }

  span {
    margin: 1rem 0;
    font-weight: 500;
  }

  label {
    font-weight: 500;
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
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: 1rem;
  }

  .local {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ${({ advertiser }) => {
    if (advertiser) {
      return css`
        .advertise {
          padding: 1rem 2rem;
          text-align: center;
          border-radius: 5px;
          width: 100%;
          border: 2px solid var(--color-brand-brand-1);
          color: var(--color-colors-fixed-white-fixed);
          background-color: var(--color-brand-brand-1);
        }

        .noAdvertise {
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
        .advertise {
          padding: 1rem 2rem;
          text-align: center;
          border-radius: 5px;
          width: 100%;
          color: var(--color-grey-scale-grey-1);
          background-color: var(--color-colors-fixed-white-fixed);
          border: 2px solid var(--color-grey-scale-grey-3);
        }

        .noAdvertise {
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

  .RegisterButton {
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    border: 2px solid var(--color-brand-brand-1);
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-brand-brand-1);
  }
`;
