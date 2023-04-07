import styled from "styled-components";

export const Main = styled.main`
    font-family: 'Roboto', 'Oxygen','Ubuntu',sans-serif;
    padding: 0 1rem 1rem;
    width: 80%;
    display: flex;
    flex-flow: wrap row;
    gap: 1.5rem;
    justify-content: center;
    margin-inline: auto;
    box-sizing: border-box;

    @media (max-width: 600px) {
        width:90%;
    }
    
    & h1 {
        margin-bottom: 1rem ;
    }

    & > p {
        color: rgb(99,99,60);
    }

    & section {
        padding-top: 1rem;
        min-width: 400px;
    }
        
    & aside {
        padding-top: 1.5rem;
        @media (max-width: 1000px) {
            border: none;
        }
    }
    `