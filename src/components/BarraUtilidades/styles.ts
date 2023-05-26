import styled, { css } from "styled-components";

export const BarraLateral = styled.div`
    width: 50px;
    display: flex;
    flex-direction: column;

    ${css`
        position: fixed;
        width: 50px;
        height: 100vh;
        right: 0;
    `}
`