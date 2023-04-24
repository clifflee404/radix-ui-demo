import React from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons'
import './styles.css'

const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="Text" style={{ color: 'white' }}>
          @peduarte starred 3 repositories
        </span>
        <Collapsible.Trigger asChild>
        {/* <Collapsible.Trigger > */}
          <button className="IconButton">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      {/* 直接展示的内容 */}
      <div className="Repository">
        <span className="Text">直接展示-@radix-ui/primitives</span>
      </div>

      <Collapsible.Content className="CollapsibleContent">
        <div className="Repository">
          <span className="Text">第二个lib-@radix-ui/colors</span>
        </div>
        <div className="Repository">
          <span className="Text">第三个lib-@stitches/react</span>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default CollapsibleDemo
