import React from 'react'
import { Image } from 'react-bootstrap'
import BG from './Gifbg.gif'
import './Background.css'
export const Background = () => {
  return (
    <div>
    <div>
    <Image className='BGBG' src={BG}/>
    </div>
    </div>
  )
}
