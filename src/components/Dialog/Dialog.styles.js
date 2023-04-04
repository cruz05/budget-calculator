import styled from "styled-components";

export const DialogContent = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height:100%;
    width:100%;
    background-color: rgba(0,0,0,0.6); 

    & > div {
        min-width: 300px;
        text-align: center;
        z-index: 2;
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: white;
        padding: 0.4rem 0.8rem;
        transform: translate(-50%, -50%);
        border: 2px solid black;
        border-radius: 0.3rem;
    }

`