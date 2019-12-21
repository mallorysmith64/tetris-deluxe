import {useState, useEffect} from 'react'
import {createStage} from '../gameHelpers'

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())
    const [rowsCleared, setRowsCleared] = useState(0)

    useEffect(() => {
        setRowsCleared(0)

        const clearRows = (newStage) =>
            newStage.reduce((arr, row) => {
                if (row.findIndex((cell) => cell[0] === 0) === -1) {
                    setRowsCleared((prev) => prev + 1)
                    arr.unshift(
                        new Array(newStage[0].length).fill([0,"clear"])
                    )
                    return arr
                }
                arr.push(row)
                return arr
            }, [])
        
        const updateStage = prevStage => {
            //for loop might be faster than map to remake stage
        const newStage = prevStage.map((row =>
            row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))))

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
            return clearRows(newStage)
        }

        return newStage
     }

        setStage(prev => updateStage(prev))
    }, 
    [player, resetPlayer]
 )
    return [stage, setStage, rowsCleared]
}