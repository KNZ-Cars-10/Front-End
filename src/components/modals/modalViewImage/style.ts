import { styled } from "styled-components";

export const StyledModalViewImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 1rem;
  max-width: 500px;
  margin-top: 5rem;
  border-radius: 10px;
  background-color: var(--color-colors-fixed-white-fixed);

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
  }

  div > span {
    cursor: pointer;
  }

  .Image {
    max-height: 400px;
    width: 100%;
    border-radius: 5px;
  }

  .Image > img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
`;
