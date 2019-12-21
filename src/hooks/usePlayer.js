import {useState, useCallback} from 'react'
import {randomTetromino} from '../tetrominos'
import {STAGE_WIDTH} from '../gameHelpers'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: {x: 0, y: 0},
        tetromino:randomTetromino().shape,
        collided:false
    })

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
    
    return [player]
}