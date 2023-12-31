import { styled } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FormStyled = styled.form`
  max-width: 450px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 25px;

  margin: 5rem 0;

  padding: 2rem;

  border-radius: 5px;
  border: 3px solid var(--grey-200);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  background-color: var(--color-colors-fixed-white-fixed);

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

  span {
    font-size: 12px;
    line-height: 18px;

    color: var(--color-feedback-alert-1);
  }

  section {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: end;

    gap: 10px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;

  height: 50px;

  padding: 0 12px;

  border: 2px solid var(--color-grey-scale-grey-4);
  border-radius: 5px;
`;

export const StyledLink1 = styled(LinkRouter)`
  width: fit-content;

  display: flex;
  justify-content: end;

  color: var(--color-grey-scale-grey-0);
  font-size: 14px;
`;

export const StyledLink2 = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  background: var(--color-colors-fixed-white-fixed);

  font-weight: 600;
  font-size: 16px;

  border: 2px solid var(--color-grey-scale-grey-4);
  border-radius: 5px;

  color: var(--color-grey-scale-grey-0);

  cursor: pointer;
`;
