import styled from "styled-components";

export const CheckboxLabel = styled.label`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: 2px solid ${({active}) => active ? '#5588ab': '#d1d3c3'};
    padding: 1rem;
    border-radius: 0.3rem;
    background-color: ${({active}) => active && 'rgba(236, 241, 245,0.25)'};
    cursor: pointer;
`