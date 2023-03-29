import styled from "styled-components";

export const StyledPanel = styled.div`
    border: 2px solid #5588ab;
    border-top: none;
    border-radius: 0 0 0.3rem 0.3rem;
    margin-top: -2px;
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
    flex-direction: column;
    background-color: #5588ab0f;

    & > div {
        padding-inline: 1.8rem;
        display: flex;
        align-items: strech;
        flex-flow: row wrap;
        gap: 0.5rem 2rem;
    }

    & input {
        width: 3rem;
        padding-block: 0.2rem;
        border: 1px solid #f0f0f0;
        text-align:center;
    }
`