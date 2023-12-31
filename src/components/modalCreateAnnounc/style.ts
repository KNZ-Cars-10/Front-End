import { styled } from "styled-components";

export const StyledModalCreateAdvert = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 3rem;
  padding-bottom: 5rem;
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
    border: 2px solid var(--color-grey-scale-grey-6);
    width: 100%;
    border-radius: 5px;
  }

  textarea {
    padding: 1rem;
    border: 2px solid var(--color-grey-scale-grey-6);
    width: 100%;
    border-radius: 5px;
  }

  select {
    padding: 1rem;
    border: 2px solid var(--color-grey-scale-grey-6);
    width: 100%;
    border-radius: 5px;
    color: var(--color-grey-scale-grey-6);
  }

  .local {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: red; */
  }

  img {
    width: 100%;
    height: 100px;
    border-radius: 5px;
  }

  .img > img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
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
