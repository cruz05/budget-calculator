import styled from "styled-components";

export const Main = styled.main`
    font-family: 'Roboto', 'Oxygen','Ubuntu',sans-serif;
    padding-block: 1.5rem;
    width: 55%;
    margin-inline: auto;
    box-sizing: border-box;
    
    @media (max-width: 530px) {
        width:90%;
    }

    & h1 {
        margin-bottom: 1rem ;
    }

    & > p {
        color: rgb(99,99,60);
    }
`