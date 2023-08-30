import { styled } from "styled-components";

export const StyledEmailNewPassword = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
  gap: 40px;

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  label {
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    max-width: 300px;
  }

  input {
    padding: 1rem;
    border: 1px solid var(--color-grey-scale-grey-6);
    width: 100%;
    border-radius: 5px;
  }

  button {
    padding: 1rem;
    border-radius: 5px;
    color: var(--color-colors-fixed-white-fixed);
    border: 2px solid transparent;
    background-color: var(--color-brand-brand-1);
  }

  button:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }
`;
