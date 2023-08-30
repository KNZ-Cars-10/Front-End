import { styled } from "styled-components";

export const StyledModalDeleteProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  padding: 1rem;
  gap: 15px;
  border-radius: 5px;
  margin: 3rem 0;
  background-color: var(--color-colors-fixed-white-fixed);

  p {
    color: var(--color-grey-scale-grey-2);
  }

  span {
    color: var(--color-grey-scale-grey-0);
    font-weight: 700;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    gap: 10px;
  }

  .buttons > button {
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 5px;
  }

  .cancel {
    color: var(--color-grey-scale-grey-2);
    background-color: var(--color-grey-scale-grey-6);
  }

  .delete {
    color: var(--color-feedback-alert-1);
    background-color: var(--color-feedback-alert-2);
  }
`;
