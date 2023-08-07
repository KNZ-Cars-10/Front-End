import { styled } from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 7rem;
  background-color: var(--color-colors-fixed-white-fixed);
  padding: 1rem;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .close {
    cursor: pointer;
    color: var(--color-grey-scale-grey-3);
  }

  section {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
  }

  section > h2 {
    padding: 1rem 0;
  }

  section > span {
    color: var(--color-grey-scale-grey-3);
    padding-left: 10px;
    margin-bottom: 5px;
    font-weight: 600;
    cursor: pointer;
  }

  section > span:hover {
    color: var(--color-grey-scale-grey-2);
  }

  section > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  section > div > span {
    color: var(--color-grey-scale-grey-3);
    font-weight: 600;
  }

  button {
    background-color: var(--color-brand-brand-2);
    padding: 15px 0;
    width: 100%;
    border-radius: 5px;
    color: var(--color-grey-scale-grey-10);
    margin: 50px 0;
  }

  button:hover {
    background-color: var(--color-brand-brand-1);
    color: var(--color-grey-scale-grey-3);
  }
`;
