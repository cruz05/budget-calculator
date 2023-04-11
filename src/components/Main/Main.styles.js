import styled from "styled-components";

export const Main = styled.main`
    font-family: 'Roboto', 'Oxygen','Ubuntu',sans-serif;
    padding: 1rem;
    display: flex;
    flex-flow: wrap row;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
    
    @media (max-width: 600px) {
        width:90%;
    }
    
    & * {        
        box-sizing: border-box;
    }
    
    & h1 {
        margin-bottom: 1rem ;
    }

    & > p {
        color: rgb(99,99,60);
    }

    & section {
        width: 370px;
        padding: 0.5rem 1.5rem;
    } 
    `