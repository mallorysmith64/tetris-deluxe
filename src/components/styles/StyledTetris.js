import styled from 'styled-components'
import space from '../../images/space-background.png'

export const StyledTetrisWrapper = styled.div`
    background:url(${space}) #000;
    background-size:cover;
    overflow:hidden;
    height:35em;
`;

export const StyledTetris = styled.div`
    display:flex;
    align-items:flex-start;
    padding: 0px 18px 18px 470px;
    margin:0 auto;
    max-width:900px;

    aside {
        width:100%;
        max-width:200px;
        display:block;
        padding:0 20px;
    }
`;