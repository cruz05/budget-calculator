import styled from "styled-components";

export const List = styled.aside`
    min-width: 17rem; 
    border: 2px solid rgba(100,100, 100, 0.1); 
    border-top: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    overflow-y: scroll;
    align-items: center;
    max-height: 630px;

    &::-webkit-scrollbar {
        width: 0.2rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0.8rem;
        background-color: #c3c3c39f;
    }

    & > h2{
        margin: 0;
    }
    
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid rgba(85, 136, 171, 0.4); 
        border-radius: 0.3rem;
        padding: 0.3rem 1.4rem;    
        width: 80%;   

        & * {
            margin: 0.2rem 0;
        }

        & div {
            display: flex;
            flex-direction: column;
            padding-inline: 0.3rem;
    
            & > p {
                font-size: 0.8rem;
                font-weight: 600;
            }
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