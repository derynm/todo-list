import React from 'react'
import "./taskList.css"

export const TaskList = ({Text,Hapus}) => {
  return (
    <div id='Task'>
        <h6>{Text}</h6>
        <button onClick={Hapus}>Delete</button>
    </div>
  )
}
