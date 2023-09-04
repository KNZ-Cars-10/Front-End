import { styled } from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 90%;
  max-width: 350px;

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      width: 100%;

      height: 50px;

      padding: 0 12px;

      border: 2px solid var(--color-grey-scale-grey-4);
      border-radius: 5px;
    }

    span {
      font-size: 12px;
      line-height: 18px;

      color: var(--color-feedback-alert-1);
    }
  }

  button {
    height: 50px;

    background: var(--color-brand-brand-1);

    border: 2px solid var(--color-brand-brand-1);
    border-radius: 5px;

    font-weight: 600;
    font-size: 16px;

    color: var(--color-colors-fixed-white-fixed);

    cursor: pointer;
  }
`;
