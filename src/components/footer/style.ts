import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--color-grey-scale-grey-0);
  color: var(--color-grey-scale-grey-10);
  text-align: center;
  height: 10vh;

  .arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--color-grey-scale-grey-2);
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  @media (min-width: 770px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
