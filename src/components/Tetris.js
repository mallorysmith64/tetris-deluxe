import React, {useState} from 'react'

import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'
import {createStage, checkCollision} from '../gameHelpers'
import {usePlayer} from '../hooks/usePlayer'
import {useStage} from '../hooks/useStage'

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer()
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
    // const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)
    
const movePlayer = direction => {
    updatePlayerPosition({x:direction, y:0})
}

const startGame = () => {
    setStage(createStage())
    setDropTime(1000)
    resetPlayer()
}

// const drop = () => {
//     // Increase level when player has cleared 10 rows
//     if (rows > (level + 1) * 10) {
//       setLevel(prev => prev + 1);
//     // increase speed
//       setDropTime(1000 / (level + 1) + 200);
//     }

//     if (!checkCollision(player, stage, { x: 0, y: 1 })) {
//         updatePlayerPos({ x: 0, y: 1, collided: false });
//       } else {
//         // game ends
//         if (player.position.y < 1) {
//           console.log('GAME OVER!!!');
//           setGameOver(true);
//           setDropTime(null);
//         }
//         updatePlayerPos({ x: 0, y: 0, collided: true });
//       }
//     };

const dropPlayer = () => {
    setDropTime(null)
    // drop()
}

// useInterval(() => {
//     drop()
// },  dropTime)

const move = ({keyCode}) => {
    if (!gameOver) {
        if (keyCode === 37) {
            movePlayer(-1)
        } else if (keyCode === 39) {
            movePlayer(1)
        } else if (keyCode === 40) {
            dropPlayer()
        }
     }
}

return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={event => move(event)}>
        <StyledTetris>
            <Stage stage={stage}/>
            <aside>
                {gameOver ? ( 
                <Display gameOver={gameOver} text="Game Over"/> 
                ) : (
                <div>
                <Display text="score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
                </div>
                        )}
            <StartButton callback={startGame}/>
            </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
    )
}

export default Tetris
