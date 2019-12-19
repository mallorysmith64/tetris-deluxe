import React from 'react'
import Cell from './Cell'

const Stage = ({stage}) => (
    <>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </>
)

export default Stage