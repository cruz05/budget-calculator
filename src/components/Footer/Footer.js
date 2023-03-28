import styled from "styled-components";

export const Footer = styled.div`
    display: grid;
    align-items: end;
    grid-template-columns: 3fr 1fr;
    padding: 0.8rem 1rem 1rem;
    & .text {
        font-size: 1.4rem;
    }

    & .total {
        font-weight: 700;
        font-size: 2rem;
        justify-self: end;
    }
`

