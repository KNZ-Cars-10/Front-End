import styled from "styled-components";

export const DetailedSection = styled.section<StyledLiProps>`
  align-self: flex-start;
  width: 100%;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  padding: 40px 10vw;
  justify-content: center;
  position: relative;

  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .advert-description,
  .advertiser-box {
    z-index: 1;
    border-radius: 4px;
  }

  .advert-description {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: var(--color-colors-fixed-white-fixed);
    z-index: 1;
    border-radius: 4px;
  }

  .advert-description > header {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 41px;
    border-radius: 4px;
    background-color: var(--color-colors-fixed-white-fixed);
  }

  .advert-description > footer {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .advert-description > footer > header {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .advert-description > header > button,
  .comment-area > button {
    align-self: flex-start;
    background-color: var(--color-brand-brand-1);
    padding: 6px 14px;
    border-radius: 4px;
    color: var(--color-colors-fixed-white-fixed);
  }

  .stamps {
    display: flex;
    justify-content: space-between;
  }

  .stamps > div {
    display: flex;
    gap: 12px;
  }

  .stamps > div > span {
    background-color: var(--color-brand-brand-4);
    color: var(--color-brand-brand-1);
    padding: 4px 8px;
  }

  .main-image {
    width: 100%;
    background-color: var(--color-grey-scale-grey-5);
    border-radius: 4px;
    max-height: 500px;
  }

  .main-image > img {
    width: 100%;
    border-radius: 4px;
    max-height: 500px;
  }

  .blue {
    min-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    top: 0;
    left: 0;
    z-index: -4;
    position: absolute;
    background-color: var(--color-brand-brand-1);
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 44px;
    width: 100%;
  }

  .comment-area {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 34px;
  }

  .comment-area > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .comment-area > div > span {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-random-random-${(props) => props.bgColor});
  }

  .comment-area > textarea {
    padding: 10px 16px;
    color: var(--color-grey-scale-grey-3);
    background-color: var(--color-colors-fixed-white-fixed);
    border: 2px solid var(--color-grey-scale-grey-5);
    border-radius: 4px;
    resize: none;
    outline: none;
  }

  .comment-area > textarea:focus {
    color: var(--color-grey-scale-grey-2);
    border: 2px solid var(--color-grey-scale-grey-3);
  }

  .comment-area > button {
    align-self: flex-end;
  }

  .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .details > figure {
    background-color: var(--color-colors-fixed-white-fixed);
    padding: 2.25rem 2.8rem;
    border-radius: 4px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  .details > figure > div {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .details > figure > div > img {
    max-width: 110px;
    max-height: 110px;
    background-color: var(--color-grey-scale-grey-5);
    border-radius: 4px;
  }

  .advertiser-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    border-radius: 4px;
    background-color: var(--color-colors-fixed-white-fixed);
    justify-content: center;
    align-items: center;
    padding: 2.25rem 2.8rem;
  }

  .advertiser-box > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-random-random-${(props) => props.bgColor});
    font-size: 32px;
    min-width: 110px;
    min-height: 110px;
    border-radius: 100%;
    color: var(--color-colors-fixed-white-fixed);
  }

  .advertiser-box > h2 {
    color: var(--color-grey-scale-grey-1);
  }

  .advertiser-box > p {
    color: var(--color-grey-scale-grey-2);
  }

  .advertiser-box > button {
    background-color: var(--color-grey-scale-grey-0);
    color: var(--color-colors-fixed-white-fixed);
    border-radius: 4px;
    padding: 10px 28px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    > main {
      width: 70%;
    }
    .details {
      width: 30%;
    }
  }

`;

interface StyledLiProps {
  bgColor: string;
}

export const UserComment = styled.li<StyledLiProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  > div > h2 {
    font-weight: 500;
  }

  > div > span {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-random-random-${(props) => props.bgColor});
  }

  > div > .point {
    background-color: var(--color-grey-scale-grey-3);
    height: 3px;
    width: 3px;
    display: flex;
    border-radius: 100%;
  }

  > div > p {
    color: var(--color-grey-scale-grey-3);
    font-size: 0.75rem;
  }

  > p {
    color: var(--color-grey-scale-grey-2);
  }
`;
