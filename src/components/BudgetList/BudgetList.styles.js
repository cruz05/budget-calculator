import styled from "styled-components";

export const List = styled.aside`
    box-sizing: border-box;
    width: 280px; 
    border-radius: 0.5rem;
    border: 2px solid rgba(100,100, 100, 0.2); 
    padding: 1rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    align-items: center;
    max-height: 650px;

    @media (max-width: 850px) {
        width: 340px;
    }

    &::-webkit-scrollbar {
        width: 0.2rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0.8rem;
        background-color: #c3c3c39f;
    }

    & > h2{
        margin: 0 ;
    }
    
    & > div:not(:first-of-type) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(85, 136, 171, 0.4);
        padding: 0.3rem 1.1rem; 
        width: 100%;   
        
        & * {
            margin: 0.2rem 0;
        }

        & > div {
            display: flex;
            flex-direction: column;
            padding-inline: 0.3rem;

            & > p {
                font-size: 0.8rem;
                font-weight: 600;
            }
        }
    }

    & .filters {
        background-color: white;
        display: flex;
        gap: 0.5rem;
        flex-direction: column;  
        width: 100%;
        padding-block: 1rem 0.8rem;
        
        & input {
            padding: 0.3rem;
        }

        & .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        & fieldset {
            padding: 0;
            font-size: 0.8rem;
            border: none;
            width: fit-content;
        }
        & button {
            padding: 0 1rem;
        }
    }
    
    & .name {
        color: #5a5a5a;
    }

    & .date {
        font-weight: 600;
        color: #9d9d9d;
    }

    & ul{
        padding-left: 1.1rem;
        font-size: 15px;
    }
`