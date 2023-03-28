import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: 2px solid #5588ab;
    padding: 1rem;
    border-radius: 0.3rem;
    background-color: ${props => props.active && '#5588ab1d'};
    cursor: pointer;
`