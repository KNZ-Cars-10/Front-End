import { styled } from "styled-components";

export const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  gap: 30px;
  background-image: url("https://res.cloudinary.com/dywbjnplm/image/upload/v1693506677/pgouinzxjldzfizkcxti.png");
  background-size: cover;
  background-position: center;

  img {
    width: 60vw;
    height: 60vw;
  }

  .header > h1 {
    text-align: center;
  }

  span {
    text-align: center;
  }

  /* @media (min-width: 1000px) {
    flex-direction: row;
  } */
`;
