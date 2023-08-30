import { styled } from "styled-components";

export const StyledResetPassword = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  h1 {
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    gap: 15px;
    border-radius: 5px;
  }

  input {
    padding: 1rem;
    border: 1px solid var(--color-grey-scale-grey-6);
    width: 100%;
    border-radius: 5px;
  }

  button {
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    border: 2px solid transparent;
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-brand-brand-1);
  }

  button:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }
`;
