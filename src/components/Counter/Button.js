import styled from "styled-components";

export const Button = styled.button` 
    color: white;
    cursor: pointer;
    padding-block: 0.2rem;
    border: none;
    border-radius: 0.2rem;
    background-color: ${({bgColor}) => bgColor && 'transparent'};

    &:hover {
        background-color: #5588ab5b;
    }

    & > * {
        font-size: 0.7rem;
        color:  ${({color}) => color ||'#5588ab'};
        vertical-align: middle;
    }
` 