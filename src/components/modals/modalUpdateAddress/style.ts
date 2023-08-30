import { styled } from "styled-components";

export const StyledModalUpdateAddress = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  padding: 3rem;
  gap: 15px;
  border-radius: 5px;
  margin: 3rem 0;
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

  .local {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .buttons > button {
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    border: 2px solid transparent;
  }

  .buttons > button:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .cancel {
    color: var(--color-grey-scale-grey-2);
    background-color: var(--color-grey-scale-grey-6);
  }

  .save {
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-brand-brand-1);
  }
`;
