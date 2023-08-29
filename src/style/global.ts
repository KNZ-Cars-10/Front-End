import { createGlobalStyle, css } from "styled-components";

interface IGlobalProps {
  filter: boolean;
}

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    transition: 1s;
    font-family: 'Nunito', 'Inter', sans-serif;
	line-height: 150%;
  }

  svg {
    cursor: pointer;
  }

  .error{
    color: var(--color-feedback-alert-1);
  }

  button{
    cursor: pointer;
    font-weight: 700;
  }

  html {
	min-height: 100vh;
	width: 100%;
  }

  body{
    min-height: 100vh;
    width: 100%;
  }

  #root{
   min-height: 100vh;
   width: 100%;
  }


  .App{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
	justify-content: space-between;
	overflow-x: hidden;
	min-height: 100vh;
  }

 
  
  .routes{
    display: flex;
    flex-direction: column;
    align-items: center;
	min-height:85vh;
    width: 100%; 
	/* background-color: var(--color-grey-scale-grey-7); */
  }


  body{
    min-height: 100vh;
    width: 100%;
	/* overflow-x: hidden */
  }

  #root{
	 min-height:80vh;
   width: 100%; 
	 background-color: var(--color-grey-scale-grey-7);
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
	z-index:5;
	min-height: 100vh;
    background-color: var(--color-matte);
	/* Tem que resolve modal de filtros com duas barras de rolagem  */
	overflow: auto;
  }

  .loading{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

  }

  .loading > h2{
	// Tem que Estiliza
  }

  .inicial{
	color: var(--color-colors-fixed-white-fixed);
  }

  :root {
	--color-feedback-alert-1: #cd2b31;
	--color-feedback-alert-2: #fdd8d8;
	--color-feedback-alert-3: #ffe5e5;
	--color-feedback-sucess-1: #18794e;
	--color-feedback-sucess-2: #ccebd7;
	--color-feedback-sucess-3: #ddf3e4;
	--color-feedback-attention-1: #FFFD0E;
	--color-feedback-attention-2: #FFEE7E;
	--color-random-random-1: #e34d8c;
	--color-random-random-2: #c04277;
	--color-random-random-3: #7d2a4d;
	--color-random-random-4: #7000ff;
	--color-random-random-5: #6200e3;
	--color-random-random-6: #36007d;
	--color-random-random-7: #349974;
	--color-random-random-8: #2a7d5f;
	--color-random-random-9: #153d2e;
	--color-random-random-10: #6100ff;
	--color-random-random-11: #5700e3;
	--color-random-random-12: #30007d;
	--color-brand-brand-1: #4529e6;
	--color-brand-brand-2: #5126ea;
	--color-brand-brand-3: #b0a6f0;
	--color-brand-brand-4: #edeafd;
	--color-grey-scale-grey-0: #0b0d0d;
	--color-grey-scale-grey-1: #212529;
	--color-grey-scale-grey-2: #495057;
	--color-grey-scale-grey-3: #868e96;
	--color-grey-scale-grey-4: #adb5bd;
	--color-grey-scale-grey-5: #ced4da;
	--color-grey-scale-grey-6: #dee2e6;
	--color-grey-scale-grey-7: #e9ecef;
	--color-grey-scale-grey-8: #f1f3f5;
	--color-grey-scale-grey-9: #f8f9fa;
	--color-grey-scale-grey-10: #fdfdfd;
	--color-colors-fixed-white-fixed: #ffffff;
	--color-matte: rgb(0, 0, 0, 0.5);
}

.text-style-heading-heading-1-700 {
	font-size: 44px;
	font-family: "Lexend", sans-serif;
	font-weight: 700;
	font-style: normal;
	line-height: 56px;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-2-600 {
	font-size: 36px;
	font-family: "Lexend", sans-serif;
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-3-500 {
	font-size: 32px;
	font-family: "Lexend", sans-serif;
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-3-600 {
	font-size: 32px;
	font-family: "Lexend", sans-serif;
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-4-600 {
	font-size: 28px;
	font-family: "Lexend", sans-serif;
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-4-500 {
	font-size: 28px;
	font-family: "Lexend", sans-serif;
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-5-500 {
	font-size: 24px;
	font-family: "Lexend", sans-serif;
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-5-600 {
	font-size: 24px;
	font-family: "Lexend", sans-serif;
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-6-500 {
	font-size: 20px;
	font-family: "Lexend", sans-serif;
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-6-600 {
	font-size: 20px;
	font-family: "Lexend", sans-serif;
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-7-500 {
	font-size: 16px;
	font-family: "Lexend", sans-serif;
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-7-600 {
	font-size: 16px;
	font-family: "Lexend", sans-serif;
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-inputs-buttons-input-label {
	font-size: 14px;
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-inputs-buttons-input-placeholder {
	font-size: 16px;
	font-family: "Inter", sans-serif;
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-inputs-buttons-button-big-text {
	font-size: 16px;
	font-family: "Inter", sans-serif;
	font-weight: 700;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-text-body-1-400 {
	font-size: 16px;
	font-family: "Inter", sans-serif;
	font-weight: 400;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}

.text-style-text-body-1-600 {
	font-size: 16px;
	font-family: "Inter", sans-serif;
	font-weight: 700;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}

.text-style-text-body-2-400 {
	font-size: 14px;
	font-family: "Inter", sans-serif;
	font-weight: 400;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}

.text-style-text-body-2-500 {
	font-size: 14px;
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}

`;
