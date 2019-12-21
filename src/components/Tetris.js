import React, { useState } from 'react';
import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Controls from './Controls';

const Tetris = () => {
	const [ dropTime, setDropTime ] = useState(null);
	const [ gameOver, setGameOver ] = useState(false);

	const [ player, updatePlayerPos, resetPlayer, playerRotate ] = usePlayer();
	const [ stage, setStage, rowsCleared ] = useStage(player, resetPlayer);
	const [ score, setScore, rows, setRows, level, setLevel ] = useGameStatus(
		rowsCleared
	);

	const mediaQuery =
		'media only screen and (not(pointer)) and (not(hover)), (max-width: 600px), (max-device-width: 1024px)';

	const movePlayer = (dir) => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 });
		}
	};

	const startGame = () => {
		// Reset Everything
		setStage(createStage());
		setDropTime(1000);
		resetPlayer();
		setGameOver(false);
		setScore(0);
		setRows(0);
		setLevel(1);
	};

	const drop = () => {
		// Increase level when player has cleared 10 rows
		if (rows > (level + 1) * 10) {
			setLevel((prev) => prev + 1);
			// Also increase speed
			setDropTime(1000 / (level + 1) + 200);
		}
		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false });
		} else {
			// Game Over
			if (player.pos.y < 1) {
				setGameOver(true);
				setDropTime(null);
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	};

	const keyUp = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 40) {
				setDropTime(1000 / (level + 1) + 200);
			}
		}
	};

	const dropPlayer = () => {
		setDropTime(null);
		drop();
	};

	const move = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 37) {
				movePlayer(-1);
			} else if (keyCode === 39) {
				movePlayer(1);
			} else if (keyCode === 40) {
				dropPlayer();
			} else if (keyCode === 38) {
				playerRotate(stage, 1);
			}
		}
	};

	const handleClick = (action) => {
		const actions = {
			drop: { keyCode: 40 },
			left: { keyCode: 37 },
			rotate: { keyCode: 38 },
			right: { keyCode: 39 }
		};

		move(actions[action]);
		keyUp(actions[action]);
	};

	useInterval(() => {
		drop();
	}, dropTime);

	return (
		<StyledTetrisWrapper
			role="button"
			tabIndex="0"
			onKeyDown={(e) => move(e)}
			onKeyUp={keyUp}
		>
			<StyledTetris mediaQuery={mediaQuery}>
				<Stage stage={stage} mediaQuery={mediaQuery} />
				<aside>
					{gameOver ? (
						<div className="display-area">
							<Display
								text={`Game Over - Score: ${score}`}
								mediaQuery={mediaQuery}
							/>
							<StartButton
								className="start-button"
								callback={startGame}
								mediaQuery={mediaQuery}
							/>
						</div>
					) : (
						<div className="display-area">
							<Display
								text={`Score: ${score}`}
								mediaQuery={mediaQuery}
							/>
							<Display
								text={`Rows: ${rows}`}
								mediaQuery={mediaQuery}
							/>
							<Display
								text={`Level: ${level}`}
								mediaQuery={mediaQuery}
							/>
							<StartButton
								className="start-button"
								callback={startGame}
								mediaQuery={mediaQuery}
							/>
						</div>
					)}
				</aside>
			</StyledTetris>
			<Controls clickHandler={handleClick} mediaQuery={mediaQuery} />
		</StyledTetrisWrapper>
	);
};

export default Tetris;