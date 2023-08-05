import { styled } from "styled-components";

export const StyledDash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .banner {
    background-image: url("/src/assets/banner 2.png");
    background-size: cover;
    background-position: center;
    width: 100%;
    /* Tem que resolve (Unidade de medida variavel) */
    height: 200px;
  }

  .banner > img {
    height: 100%;
    width: 100%;
  }

  .linearGradient {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.5rem;
    gap: 0.5rem;
    height: 100%;
    width: 100%;
    /* background: linear-gradient(rgba(255, 0, 0, 0), rgba(0, 0, 0, 1)); */
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(255, 0, 0, 0));
  }

  .linearGradient > h2 {
    color: var(--color-grey-scale-grey-10);
  }

  .linearGradient > p {
    color: var(--color-grey-scale-grey-10);
    font-weight: 500;
    text-align: center;
  }
`;
