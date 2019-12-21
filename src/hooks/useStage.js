import {useState, useEffect} from 'react'
import {createStage} from '../gameHelpers'
import { usePlayer } from './usePlayer'

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())

    useEffect(() => {
        const updateStage = prevStage => {
            //for loop might be faster than map to remake stage
        const newStage = prevStage.map(row =>
            row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell)),
        )

        //make tetromino
        player.tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    newStage[y + player.position.y]
                            [x + player.position.x] = 
                            [value,`${player.collided ? "merged" : "clear"}`]
                }
            })
        })
        
        //check for collision
        if (player.collided) {
            resetPlayer()
        }

        return newStage
     }

        setStage(prev => updateStage(prev))
    }, [player.collided, player.position.x, player.position.y, player.tetromino])

    return [stage, setStage]
}