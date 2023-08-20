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

    .overflow {
        overflow-y: scroll;
    }
`;

export const FormContent = styled.form`
    width: 520px;
    height: 1296px;
    background-color: var(--color-colors-fixed-white-fixed);
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 10px;

    .tittle{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        margin-bottom: 30px;
    }
    .group_select {
        display: flex;
        flex-direction: column;
        margin: 5px;
        gap: 10px;
    }
    #marca,
    #modelo {
        width: 470px;
    }
    .group_infos {
        display: flex;
        flex-wrap: wrap;
    }
    .group_select > select {
        width: 230px;
        height: 48px;
    }
    select {
        border: 1px solid gray;
    }
    input {
        padding: 10px;
        height: 48px;
        border: 2px solid var(--color-grey-scale-grey-7);
    }
    textarea {
        border: 1.5px solid var(--color-grey-scale-grey-7);
        height: 80px;
    }

    .modal-buttons {
        display: flex;
        gap: 5px;
    }
    .modal-buttons > button {
        width: 400px;
        height: 48px;
    }

    .img__container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .img__container > label {
        margin-top: 24px;
    }
    .add_img {
        margin-top: 30px;
        margin-bottom: 40px;
        width: 315px;
        height: 38px;
        padding: 12px, 20px, 12px, 20px;
        color:var(--color-brand-brand-1);
    }
    .buttons{
        display: flex;
    }
    .delete{
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-grey-scale-grey-2);
        width: 262px;
        height: 48px;
        border: 2px solid var(--color-grey-scale-grey-6);
        border-radius: 4px;
        padding: 12px, 28px, 12px, 28px;
    }
    .save{
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-brand-brand-4);
        width: 193px;
        height: 48px;
        
        border: 2px solid var(--color-grey-scale-grey-6);
        border-radius: 4px;
        background-color: var(--color-brand-brand-3);
    }
`;
