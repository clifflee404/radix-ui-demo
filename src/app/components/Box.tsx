import React from 'react'
import './BoxStyles.css'
interface IBoxProps {
  children: React.ReactNode
  title?: string // 组件标题
  desc?: string // 组件说明
  width?: number // 容器宽度
  height?: number // 容器高度
  styles?: any // 容器额外样式
}

const Box = ({ children, title, desc, width, height, styles }: IBoxProps) => {
  // console.log('---box width:', width)
  // console.log('---box height:', height)

  return (
    <div className="box-wrapper">
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
      <div
        className="box"
        style={{
          width,
          height,
          ...styles,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Box
