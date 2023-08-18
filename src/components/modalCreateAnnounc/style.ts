import styled from "styled-components";

export const CreateAnnounceForm = styled.form`
  background-color: var(--color-colors-fixed-white-fixed);
  padding: 18px 24px;
  max-width: 520px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  > header {
    display: flex;
    justify-content: space-between;
  }

  > header > p {
    color: var(--color-grey-scale-grey-1);
    font-weight: 550;
  }

  > header > img {
    cursor: pointer;
    position: sticky;
    top: 4px;
    border-radius: 100%;
  }

  > header > img:hover {
    background-color: var(--color-feedback-alert-1);
    border-radius: 100%;
  }

  > .doub-input {
    display: flex;
    gap: 14px;
    flex-direction: column;
    justify-content: space-between;
  }

  >.buttonsSubmit{
      align-self: end;
      display: flex;
      gap: 14px;
  }

  > .buttonsSubmit > button {
    padding: 12px 16px;
    border-radius: 4px;
  }

  .cancel {
    background-color: var(--color-grey-scale-grey-6);
    color: var(--color-grey-scale-grey-2);
  }

  .cancel:hover {
    background-color: var(--color-feedback-alert-1);
    color: var(--color-grey-scale-grey-7);
  }

  > .buttonsSubmit > .submit {
    background-color: var(--color-brand-brand-3);
    color: var(--color-grey-scale-grey-7);
    padding: 12px 40px;
  }

  .submit:hover{
    background-color: var(--color-brand-brand-1);
  }

  @media (min-width: 678px) {
    > .doub-input {
      flex-direction: row;
    }
  }
`;

export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > .input {
    border: 1px solid var(--color-grey-scale-grey-4);
    border-radius: 4px;
    padding: 10px 16px;
    outline: none;
    color: var(--color-grey-scale-grey-3);
  }

  > .input:focus {
    border: 1px solid var(--color-grey-scale-grey-1);
    color: var(--color-grey-scale-grey-1);
  }
`;
