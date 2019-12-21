import styled from 'styled-components';

export const StyledControls = styled.div`
	display: none;
	@${(props) => props.mediaQuery} {
        position: fixed;
        bottom: 0;
        left: 0
		width: 100%;
		height: calc(100vh - 32vh - 50vh);
        color: #999;
        display: block;
		.row {
			width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
            div {
                border-radius: 20px;
                height: 80%;
                border: 3px solid rgb(51, 51, 51);
                background: black;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                user-select: none;
			}
		}
		.drop {
            margin: 0 auto;
            
            div {
                width: 66%;
                padding-bottom: 2%;
            }
		}
		.translate {
            display: flex;
            justify-content: space-between;
			div {
                width: 30%;
			}
		}
	}
`;