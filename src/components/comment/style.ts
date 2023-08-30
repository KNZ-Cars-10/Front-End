import { css, styled } from "styled-components";

interface IProps {
  color: string | undefined;
}

export const StyledComment = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid transparent;
  position: relative;

  &:hover {
    border: 1px solid var(--color-grey-scale-grey-2);
  }

  form {
    width: 100%;
  }

  form > input {
    position: absolute;
    top: 80px;
    width: 80%;
    color: var(--color-grey-scale-grey-2);
    border: none;
    background-color: transparent;
  }

  .commentHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 2rem;
    cursor: pointer;
    color: var(--color-colors-fixed-white-fixed);
  }

  .commentUserImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    width: 50px;
    height: 50px;
  }

  .commentUserImg > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .commentHeader > h3 {
    font-size: 1rem;
  }

  .commentUserInfo {
    display: flex;
    flex-direction: column;
  }

  .commentUserInfo > span {
    color: var(--color-grey-scale-grey-3);
  }

  .commentUserInfo > h3 {
    color: var(--color-grey-scale-grey-1);
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
    border: 2px solid transparent;
    width: 100%;
    height: 72px;
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

  .cancel:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .delete:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .save:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  @media (min-width: 600px) {
    .buttons {
      flex-direction: row;
    }
  }
`;
