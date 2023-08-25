import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledSubHeader = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--color-brand-brand-1);
`;

export const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  position: absolute;
  background-color: var(--color-grey-scale-grey-10);
  gap: 20px;
  border-radius: 4px;
  padding: 2rem;
  top: 155px;
  z-index: 2;
`;

export const StyledElipseProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 90px;
  background-color: blue;
`;

export const StyledInitialsProfileInfo = styled.p`
  font-size: 36px;
  font-weight: 500;
`;

export const StyledName = styled.p`
  font-size: 20px;
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  color: var(--color-grey-scale-grey-1);
`;

export const StyledNameSpanDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const StyledSpan = styled.span`
  background-color: var(--color-brand-brand-4);
  border-radius: 4px;
  padding: 5px;
  color: var(--color-brand-brand-1);
`;

export const StyledText = styled.p`
  color: var(--color-grey-scale-grey-2);
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 90%;
  margin-top: 10rem;
`;

export const StyleTitle = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const StyleUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
`;
