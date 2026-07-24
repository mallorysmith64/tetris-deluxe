import styled from 'styled-components'

export const StyledTetrisWrapper = styled.div`
    background:url("https://ak9.picdn.net/shutterstock/videos/18681329/thumb/1.jpg");
    background-size:cover;
    overflow:hidden;
    height:100vh;
    width:100vw;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const StyledTetris = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 18px;
    margin:0 auto;
    max-width:900px;
    width:100%;
    height:100%;
    gap: 20px;

    aside {
        width:100%;
        max-width:200px;
        display:block;
        padding:0 20px;
    }
`;