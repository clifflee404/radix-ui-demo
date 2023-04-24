import React from 'react'
import './BoxStyles.css'
interface IBoxProps {
  children: React.ReactNode
  width?: number
  height?: number
  styles?: any
}

const Box = ({ children, width, height, styles }: IBoxProps) => {
  // console.log('---box width:', width)
  // console.log('---box height:', height)

  return (
    <div
      className="box"
      style={{
        width,
        height,
        ...styles
      }}
    >
      {children}
    </div>
  )
}

export default Box
