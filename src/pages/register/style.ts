import { styled } from "styled-components";

export const StyledRegister = styled.div`
width:100%;
height:100%;
background-color: var(--color-grey-scale-grey-7);


.flex-column{
    display: flex;
    flex-direction: column;
    width: 152px;
    gap: 8px;
}


.flex-row{
    display: flex;
    gap: 11px;
}

.flex-buttons{
    display: flex;
    justify-content: space-between;
    button{
        width: 48%;
    }
}

.stick-label{
    display: flex;
    flex-direction: column;
    gap: 8px;
}


form{
    width: 411px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: var(--color-colors-fixed-white-fixed);
    margin: 0 auto;
    padding: 44px 48px 44px 48px;
    margin-top: 49px;
    margin-bottom: 98px;
    border-radius: 4px;
}


button {
    padding: 10px 20px;
    border: 1.5px solid var(--color-grey-scale-grey-4);
    cursor: pointer;
    border-radius: 4px;
    color: var(--color-grey-scale-grey-0);
    background-color: var(--color-colors-fixed-white-fixed);
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    height: 48px;
}

button:hover{
    background-color: var(--color-brand-brand-1);
    color: var(--color-colors-fixed-white-fixed);
    border: none;
}

input{
    height: 48px;
    border-radius: 4px;
    border: 1.5px solid var(--color-grey-scale-grey-7);
    color: var(--color-grey-scale-grey-3);
    padding-left: 20px; 
}


.selected {
    background-color: var(--color-brand-brand-1); 
    color: white;
}

.centralize-p{
    text-align: center;
}
`;