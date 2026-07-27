import styled from 'styled-components'

export const StyledPauseButton = styled.button`
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    border: 0.1em solid;
    color: ${props => (props.isPaused ? '#00AA00' : '#CC0000')};
    background: #332C25;
    border-color: ${props => (props.isPaused ? '#00AA00' : '#CC0000')};
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.9;
    }

    @${props => props.mediaQuery} {
        font-size: 0.8rem;
        padding: 15px;
        min-height: 25px;
    }
`