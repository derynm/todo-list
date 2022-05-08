import React from 'react'

export const TaskList = ({Text,Hapus}) => {
  return (
    <div>
        <h1>{Text}</h1>
        <button onClick={Hapus}>hapus</button>
    </div>
  )
}
