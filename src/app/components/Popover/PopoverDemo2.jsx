'use client'

import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import './styles.css'

const PopoverDemo2 = () => (
  <Popover.Root>
    <Popover.Trigger className='PopoverTrigger'>
      Popover Trigger
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className='PopoverContent' sideOffset={5}>
        some  more info ...
        some  more info ...
        some  more info ...
        some  more info ...
        <Popover.Arrow className='PopoverArrow'/>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo2