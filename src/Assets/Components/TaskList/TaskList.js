import React from 'react'
import "./taskList.css"

export const TaskList = ({Text,Hapus}) => {
  return (
    <div id='Task'>
        <h1>{Text}</h1>
        <button onClick={Hapus}>hapus</button>
    </div>
  )
}
