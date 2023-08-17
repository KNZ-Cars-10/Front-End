import { styled } from "styled-components";

export const StyledRegister = styled.div`
width:100%;
height:100%;
background-color: var(--color-brand-brand-4);

.errors{
    color: red;
}

.flex-column{
    display: flex;
    flex-direction: column;
    width: 152px;
}

.flex-row{
    display: flex;
    gap: 10px;
}

form{
    width: 411px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: var(--color-colors-fixed-white-fixed);
    input{
        border: 1px solid red;
    }
    margin: 0 auto;
    padding: 44px 48px 44px 48px;
    margin-top: 49px;
    margin-bottom: 98px;
    border-radius: 4px;
}

.selected {
    background-color: #8a63d2; 
    color: white;
    border-color: #8a63d2;
}
`;