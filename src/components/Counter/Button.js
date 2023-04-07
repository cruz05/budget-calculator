import styled from "styled-components";

export const Button = styled.button` 
    color: white;
    cursor: pointer;
    padding-block: 0.2rem;
    padding-inline: ${({px}) => px && '0.7rem'};
    border: none;
    border-radius: 0.2rem;
    background-color: ${({bgColor}) => bgColor};

    &:hover {
        background-color: #5588ab5b;
    }

    & > * {
        font-size: 0.7rem;
        color:  ${({color}) => color ||'#5588ab'};
        vertical-align: middle;
    }
` 