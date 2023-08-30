import { styled } from "styled-components";

export const StyledEmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5rem;
  gap: 30px;
  border-radius: 10px;
  border: 2px solid var(--color-grey-scale-grey-2);
  font-size: 1rem;
  max-width: 1000px;

  h2 {
    color: var(--color-grey-scale-grey-1);
    font-size: 2rem;
    margin: 0;
    text-align: center;
  }

  span {
    color: var(--color-grey-scale-grey-3);
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    color: var(--color-brand-brand-2);
    font-size: 1.5rem;
    text-align: center;
  }
`;
