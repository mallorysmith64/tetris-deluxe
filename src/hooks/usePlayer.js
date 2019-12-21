import {useState, useCallback} from 'react'
import {randomTetromino} from '../tetrominos'
import {STAGE_WIDTH, checkCollision} from '../gameHelpers'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: {x: 0, y: 0},
        tetromino:randomTetromino().shape,
        collided:false
    })

    const rotate = (matrix, direction) => {
		// Make the rows to become cols (transpose )
		const rotatedTetro = matrix.map((_, index) =>
			matrix.map((col) => col[index])
		);
		// Reverse each row to get a rotated matrix
		if (direction > 0) return rotatedTetro.map((row) => row.reverse());
		return rotatedTetro.reverse();
	};

    const playerRotate = (stage, direction) => {
		const clonedPlayer = JSON.parse(JSON.stringify(player));
		clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction);

		const position = clonedPlayer.position.x;
		let offset = 1;
		while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
			clonedPlayer.position.x += offset;
			offset = -(offset + (offset > 0 ? 1 : -1));
			if (offset > clonedPlayer.tetromino[0].length) {
				rotate(clonedPlayer.tetromino, - direction);
				clonedPlayer.position.x = position;
				return;
			}
		}

		setPlayer(clonedPlayer);
	};

    const updatePlayerPosition = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            position: {x: (prev.position.x += x)}, y: (prev.position.y += y),
            collided,
        }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            //set y to 0 b/c tetromino starts at the top
            position: {x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided:false
        })
    }, [])
    
    return [player, updatePlayerPosition, resetPlayer, playerRotate]
}