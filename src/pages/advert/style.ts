import { styled } from "styled-components";

interface IProps {
  UserColor: string | undefined;
  MyColor: string | undefined | null;
}

export const StyledAdvert = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
  height: 100%;
  background-color: var(--color-grey-scale-grey-7);
  position: relative;
  padding-bottom: 200px;

  .left {
    align-items: center;
    gap: 30px;
    height: 100%;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    width: 100%;
    position: absolute;
    z-index: 0;
    background-color: var(--color-brand-brand-1);
    left: 0px;
    top: 0px;
  }

  .img {
    align-items: center;
    justify-content: center;
    height: 300px;
    background-color: var(--color-colors-fixed-white-fixed);
  }

  .img > img {
    width: 90%;
    height: 90%;
    border-radius: 5px;
  }

  .card {
    display: flex;
    padding: 1rem;
    width: 100%;
    border-radius: 5px;
    max-width: 900px;
    z-index: 1;
    flex-direction: column;
  }

  .informations {
    gap: 20px;
    background-color: var(--color-colors-fixed-white-fixed);
  }

  .informations > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .informations > div > span {
    padding: 0.5rem;
    background-color: var(--color-brand-brand-4);
    color: var(--color-brand-brand-1);
    font-weight: 600;
    border-radius: 5px;
  }

  .informations > a {
    padding: 1rem;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    border: 2px solid transparent;
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-brand-brand-2);
  }

  .informations > a:hover {
    border: 2px solid var(--color-grey-scale-grey-0);
  }

  .description > p {
    width: 100%;
    color: var(--color-grey-scale-grey-2);
  }

  .description {
    background-color: var(--color-colors-fixed-white-fixed);
  }

  .images {
    background-color: var(--color-colors-fixed-white-fixed);
  }

  .user {
    align-items: center;
    gap: 10px;
    background-color: var(--color-colors-fixed-white-fixed);
  }

  .imgProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    height: 50px;
    width: 50px;
    color: var(--color-colors-fixed-white-fixed);
  }

  .imgProfile > img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  .user > button {
    padding: 1rem;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    border: 2px solid transparent;
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-grey-scale-grey-0);
  }

  .user > button:hover {
    color: var(--color-brand-brand-1);
    border: 2px solid var(--color-brand-brand-1);
  }

  .user > h2 {
    text-align: center;
  }

  .comments {
    gap: 20px;
    background-color: var(--color-colors-fixed-white-fixed);
  }

  .comments > ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .images {
    flex-direction: column;
  }

  .imagesUl {
    display: flex;
    overflow: auto;

    gap: 10px;
  }

  .imagesUl > li {
    border: solid 2px transparent;
    border-radius: 5px;
  }

  .imagesUl > li:hover {
    border: solid 2px var(--color-grey-scale-grey-0);
  }

  .imagesUl > li > img {
    height: 70px;
    width: 70px;
    border-radius: 5px;
    cursor: pointer;
  }

  .myComment {
    gap: 10px;
    background-color: var(--color-colors-fixed-white-fixed);
    z-index: 0;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .myComment > textarea {
    padding: 1rem;
    border: 1px solid var(--color-grey-scale-grey-4);
    border-radius: 5px;
  }

  .header > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    height: 50px;
    width: 50px;
    color: var(--color-colors-fixed-white-fixed);
  }

  .header > div > img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  .myComment > button {
    padding: 1rem;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-brand-brand-2);
  }

  .right {
    display: none;
  }

  @media (min-width: 500px) {
    .imagesUl > li > img {
      height: 200px;
      width: 200px;
    }

    .imagesUl {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    .right {
      display: flex;
      gap: 30px;
      margin-top: 1rem;
      width: 100%;
      max-width: 500px;
      z-index: 0;
    }

    .right > .images > .imagesUl > li > img {
      height: 70px;
      width: 70px;
    }

    .left {
      width: 100%;
    }

    .left > .user {
      display: none;
    }

    .left > .images {
      display: none;
    }
  }
`;
