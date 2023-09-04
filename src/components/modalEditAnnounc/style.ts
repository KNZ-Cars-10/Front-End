import { css, styled } from "styled-components";

interface IProps {
    status: boolean | null | undefined;
}

export const StyledModalUpdateAddress = styled.form<IProps>`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 600px;
    padding: 3rem;
    padding-bottom: 5rem;
    gap: 15px;
    border-radius: 5px;
    margin: 3rem 0;
    background-color: var(--color-colors-fixed-white-fixed);

    h2 {
        margin: 1rem 0;
    }

    label {
        font-weight: 700;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
    }

    select{
        border: 2px solid var(--color-grey-scale-grey-6);
        height: 48px;
        border-radius: 5px;
    }
    input {
        padding: 1rem;
        border: 2px solid var(--color-grey-scale-grey-6);
        width: 100%;
        border-radius: 5px;
    }

    textarea {
        padding: 1rem;
        border: 2px solid var(--color-grey-scale-grey-6);
        width: 100%;
        border-radius: 5px;
    }

    .local {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .statusButtons {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        gap: 10px;
        margin-top: 1rem;
    }

    ${({ status }) => {
        if (status) {
            return css`
                .true {
                    height: 48px;
                    padding: 1rem 2rem;
                    text-align: center;
                    border-radius: 5px;
                    width: 100%;
                    border: 2px solid var(--color-brand-brand-1);
                    color: var(--color-colors-fixed-white-fixed);
                    background-color: var(--color-brand-brand-1);
                }

                .false {
                    height: 48px;
                    padding: 1rem 2rem;
                    text-align: center;
                    border-radius: 5px;
                    width: 100%;
                    color: var(--color-grey-scale-grey-1);
                    background-color: var(--color-colors-fixed-white-fixed);
                    border: 2px solid var(--color-grey-scale-grey-3);
                }
            `;
        } else {
            return css`
                .true {
                    height: 48px;
                    padding: 1rem 2rem;
                    text-align: center;
                    border-radius: 5px;
                    width: 100%;
                    color: var(--color-grey-scale-grey-1);
                    background-color: var(--color-colors-fixed-white-fixed);
                    border: 2px solid var(--color-grey-scale-grey-3);
                }

                .false {
                    height: 48px;
                    padding: 1rem 2rem;
                    text-align: center;
                    border-radius: 5px;
                    width: 100%;
                    border: 2px solid var(--color-brand-brand-1);
                    color: var(--color-colors-fixed-white-fixed);
                    background-color: var(--color-brand-brand-1);
                }
            `;
        }
    }}

    img {
        width: 100%;
        min-height: 350px;
        max-height: 350px;
        border-radius: 5px;
    }

    .img > img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .cover_image > div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .cover_image > div > button {
        text-align: center;
        padding: 0.5rem 0.5rem;
        border-radius: 5px;

        background-color: var(--color-brand-brand-1);
        color: var(--color-colors-fixed-white-fixed);
    }

    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    .buttons > button {
        padding: 1rem 2rem;
        text-align: center;
        border-radius: 5px;
        /* width: 100%; */
        height: 50px;
    }
    .div_tittle {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .cancel {
        color: var(--color-grey-scale-grey-4);
        background-color: var(--color-colors-fixed-white-fixed);
        width: 30px;
        height: 30px;
        border-radius: 100%;
    }

    .delete {
        color: var(--color-grey-scale-grey-2);
        background-color: var(--color-grey-scale-grey-6);
        width: 55%;
    }

    .save {
        color: var(--color-brand-brand-4);
        background-color: var(--color-brand-brand-2);
        width: 45%;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }

    .url {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        width: 100%;
    }

    .url > input {
        cursor: pointer;
    }

    .coverImage {
        cursor: pointer;
    }

    .url > button {
        text-align: center;
        border-radius: 5px;
        padding: 0 0.5rem;
        height: 100%;
        color: var(--color-feedback-alert-1);
        background-color: var(--color-feedback-alert-2);
    }

    @media (min-width: 800px) {
        .buttons {
            flex-direction: row;
        }
    }
`;
