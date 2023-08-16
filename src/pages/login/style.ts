import { styled } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FormStyled = styled.form`
  max-width: 400px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 25px;

  padding: 35px;

  border: 3px solid var(--grey-200);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  h1 {
    font-weight: 600;
    font-size: 24px;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  label {
    font-size: 14px;
  }

  input {
    width: 100%;

    height: 50px;

    padding: 0 12px;

    border: 2px solid var(--color-grey-scale-grey-4);
    border-radius: 8px;
  }

  button {
    height: 50px;

    background: var(--color-brand-brand-1);

    border: 2px solid var(--color-brand-brand-1);
    border-radius: 3px;

    font-weight: 600;
    font-size: 16px;

    color: var(--color-colors-fixed-white-fixed);

    cursor: pointer;
  }

  p {
    text-align: center;

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: var(--grey-250);
  }

  section {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  span {
    display: flex;
    justify-content: end;
    align-items: center;

    font-size: 14px;

    cursor: pointer;
  }
`;

export const Link = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  background: var(--color-colors-fixed-white-fixed);

  font-weight: 600;
  font-size: 16px;

  border: 2px solid var(--color-grey-scale-grey-4);
  border-radius: 3px;

  color: var(--color-grey-scale-grey-0);

  cursor: pointer;
`;
