import styled from 'styled-components'
import space from '../../images/space-background.png'

export const StyledTetrisWrapper = styled.div`
    // background:url(${space}) #000;
    background:url("https://ak9.picdn.net/shutterstock/videos/18681329/thumb/1.jpg");
    background-size:cover;
    overflow:hidden;
    height:41.6em;
`;

export const StyledTetris = styled.div`
    display:flex;
    align-items:flex-start;
    padding: 55px 18px 18px 470px;
    margin:0 auto;
    max-width:900px;

    aside {
        width:100%;
        max-width:200px;
        display:block;
        padding:0 20px;
    }
`;