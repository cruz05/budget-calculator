import styled from "styled-components";

export const TextInput = styled.input`
padding: 0.9rem;
border-radius: 0.3rem;
border: 2px solid #bfbfbf;
cursor: pointer;
font-size: 1rem;

    &::placeholder {
        color: #a191a3;
    }

    &:focus {
        outline-color: #5588ab;
    }
`

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 600;
    & + p{
        font-size: 0.85rem;
        color: #999;
        margin-block: 0.2rem 0;
    }
`