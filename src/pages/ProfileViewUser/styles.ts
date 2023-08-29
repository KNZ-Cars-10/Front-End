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
font-style: normal;
text-decoration: none;
text-transform: none;
color: var(--color-grey-scale-grey-1);
`
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
font-size: 16px;
font-family: "Inter", sans-serif;
font-weight: 400;
font-style: normal;
line-height: 28px;
text-decoration: none;
text-transform: none;
color: var(--color-grey-scale-grey-2);
margin-top: 24px;
`

export const StyledMain = styled.div`
width: 100%;
background-color: var(--color-grey-scale-grey-6);
position: absolute;
margin-top: 357px;
z-index: 0;
`

export const StyleTitle = styled.p`
font-size: 24px;
font-family: "Lexend", sans-serif;
font-weight: 600;
font-style: normal;
text-decoration: none;
text-transform: none;
color: #000000;
margin-left: 184px;
margin-top: 196.22px;
`

export const StyleUl = styled.ul`
width: 1392px;
height: auto;
margin: 0 auto;
margin-top: 65.57px;
display: flex;
flex-direction: row;
align-content: flex-start;
justify-content: flex-start;
flex-wrap: wrap;
gap: 48px;
`

export const TempHeader = styled.div`
width: 100%;
height: 80px;
position: absolute;
z-index: 5;
background-color: white;
`