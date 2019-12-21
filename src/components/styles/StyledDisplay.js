import styled from 'styled-components';

export const StyledDisplay = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin: 0 0 2vh 0;
	padding: 2vh;
	border: 4px solid #333;
	min-height: 3vh;
	width: 100%;
	border-radius: 20px;
	color: ${(props) => (props.gameOver ? 'red' : '#999')};
	background: #000;
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 1rem;
	@${(props) => props.mediaQuery} {
		flex-wrap: wrap;
		width: 46%;
		min-height: 15px;
		font-size: 0.6rem;
		margin: 1vh 2%;
	}
`;