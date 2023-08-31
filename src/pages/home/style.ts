import { styled } from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--color-colors-fixed-white-fixed);
  padding-bottom: 200px;

  .banner {
    background-image: url("https://res.cloudinary.com/dywbjnplm/image/upload/v1693497535/jizkr8xg7zwpwlcudwbc.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 300px;
    height: 40vw;
  }

  .linearGradient {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem;
    gap: 0.5rem;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(255, 0, 0, 0));
  }

  .linearGradient > h2 {
    text-align: center;
    font-size: 3rem;
    color: var(--color-grey-scale-grey-10);
  }

  .linearGradient > p {
    color: var(--color-grey-scale-grey-10);
    font-weight: 500;
    text-align: center;
  }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-self: flex-start;

    gap: 1rem;
    width: 100%;
    padding: 1rem;
    overflow: auto;
  }

  button {
    background-color: var(--color-brand-brand-2);
    padding: 15px 0;
    width: 90%;
    border-radius: 5px;
    color: var(--color-grey-scale-grey-10);
    border: solid 2px transparent;
    margin: 50px 0;
  }

  button:hover {
    border: solid 2px var(--color-grey-scale-grey-0);
  }

  .pages {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

  .pages > p {
    color: var(--color-grey-scale-grey-3);
    font-weight: 700;
  }

  .pages > p > span {
    color: var(--color-grey-scale-grey-2);
  }

  .pages > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }
  .pages > div > span {
    color: var(--color-brand-brand-2);
    font-weight: 700;
    cursor: pointer;
  }

  main {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    width: 100%;
  }

  .filters {
    display: none;
  }

  @media (min-width: 1000px) {
    padding-bottom: 50px;

    .filterButton {
      display: none;
    }

    .pages {
      margin: 5rem 0;
    }

    .filters {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 1rem;
      max-width: 300px;

      background-color: var(--color-colors-fixed-white-fixed);

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
        width: 100%;
      }

      section > h2 {
        padding: 1rem 0;
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
        padding-left: 10px;
        margin-bottom: 5px;
        font-weight: 600;
        align-self: flex-start;
        cursor: pointer;
      }

      button {
        background-color: var(--color-brand-brand-2);
        padding: 15px 0;
        width: 100%;
        border-radius: 5px;
        color: var(--color-grey-scale-grey-10);
        margin: 50px 0;
      }
    }

    ul {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
