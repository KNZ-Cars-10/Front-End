import { styled } from "styled-components";

interface IProfileProps {
  color: string | undefined | null;
}

export const StyledProfile = styled.div<IProfileProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 3rem 1rem 3rem;
  background-color: var(--color-grey-scale-grey-7);

  & > h2 {
    margin-top: 3rem;
  }

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

  ul {
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    gap: 1rem;
    width: 100%;
    margin-top: 10rem;
    padding: 1rem;
    overflow: auto;
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 0 10px;
    max-width: 2000pxpx;
    padding: 1rem;
    margin-top: 3rem;
    border-radius: 10px;
    background-color: var(--color-colors-fixed-white-fixed);
    z-index: 1;
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
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .informations {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .informations > span {
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

  .profileButtons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .button {
    width: 100%;
    border-radius: 5px;
    background-color: var(--color-colors-fixed-white-fixed);
    padding: 1rem;
    font-weight: 700;
  }
  .createAdvert {
    border: 2px solid var(--color-brand-brand-2);
    color: var(--color-brand-brand-2);
  }

  .updateProfile {
    border: 2px solid var(--color-feedback-sucess-1);
    color: var(--color-feedback-sucess-1);
  }

  .updateAddress {
    border: 2px solid var(--color-feedback-alert-1);
    color: var(--color-feedback-alert-1);
  }

  .createAdvert:hover {
    border: 2px solid var(--color-grey-scale-grey-1);
    color: var(--color-grey-scale-grey-1);
  }

  .updateProfile:hover {
    border: 2px solid var(--color-grey-scale-grey-1);
    color: var(--color-grey-scale-grey-1);
  }

  .updateAddress:hover {
    border: 2px solid var(--color-grey-scale-grey-1);
    color: var(--color-grey-scale-grey-1);
  }

  .anúncios {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 100%;
    gap: 10px;
  }

  @media (min-width: 800px) {
    .user {
      align-items: flex-start;
      gap: 20px;
    }

    .profileButtons {
      flex-direction: row;
      max-width: 500px;
    }
  }
`;
