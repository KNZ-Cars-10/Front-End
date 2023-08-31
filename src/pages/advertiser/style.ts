import { css, styled } from "styled-components";

interface IUserProps {
  color: string | undefined | null;
}

export const StyledAdvertiser = styled.div<IUserProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 3rem 1rem 3rem;
  background-color: var(--color-grey-scale-grey-7);
  padding-bottom: 300px;

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 100%;
    position: absolute;
    z-index: 0;
    background-color: var(--color-brand-brand-1);
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 0 10px;
    max-width: 2000px;
    padding: 1rem;
    margin-top: 3rem;
    border-radius: 10px;
    background-color: var(--color-colors-fixed-white-fixed);
    z-index: 1;
  }

  & > h2 {
    margin: 2rem 0;
  }

  .imgProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    height: 100px;
    width: 100px;
  }

  .imgProfile > span {
    font-weight: 600;
    font-size: 2rem;
    color: var(--color-colors-fixed-white-fixed);
  }

  .imgProfile > img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  .informations {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .informations > span {
    text-align: center;
    font-weight: 700;
    color: var(--color-grey-scale-grey-1);
  }

  .informations > .advertiser {
    padding: 0.5rem;
    background-color: var(--color-brand-brand-4);
    color: var(--color-brand-brand-2);
    font-weight: 600;
    border-radius: 5px;
  }

  .informations > .noAdvertiser {
    padding: 0.5rem;
    background-color: var(--color-brand-brand-4);
    color: var(--color-brand-brand-2);
    font-weight: 600;
    border-radius: 5px;
  }

  .user > p {
    color: var(--color-grey-scale-grey-2);
    line-height: 150%;
  }

  ul {
    display: flex;

    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    gap: 10px;
    width: 100%;
    overflow: auto;
  }

  .advertsList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 800px) {
    .user {
      align-items: flex-start;
      gap: 20px;
    }

    ul {
      flex-wrap: wrap;
      justify-content: center;
    }

    .informations {
      flex-direction: row;
    }
  }
`;
