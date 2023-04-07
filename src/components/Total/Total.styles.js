import styled from "styled-components";

export const Budget = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr;
    padding: 0 0.5rem;
    & .text {
        font-size: 1.4rem;
        justify-self: start;
        margin-block: 1rem 0.3rem;
    }

    & .total {
        font-weight: 700;
        font-size: 2rem;
        justify-self: end;
        margin-block: 1rem 0.3rem;
    }
`

