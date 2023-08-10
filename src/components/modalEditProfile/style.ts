import { styled } from "styled-components";

export const DivModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-matte);
    width: 100vw;
    height: 100vh;
    position: fixed;
    right: 0;
    z-index: 10;
`;

export const FormContent = styled.form`
    width: 520px;
    height: 823px;
    background-color: var(--color-colors-fixed-white-fixed);
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 10px;

    div {
        display: flex;
        justify-content: space-between;
        margin: 5px;
    }

    h2 {
        font-family: var();
    }
    label{

    }

    input{
        padding: 10px;
        height: 48px;
        border:2px solid var(--color-grey-scale-grey-7) ;
    }
    textarea{
        border: 1.5px solid var(--color-grey-scale-grey-7);
        height: 80px;
    }
`;
