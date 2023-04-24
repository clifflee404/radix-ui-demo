'use client'

import Image from 'next/image'
import styles from './page.module.css'
import PopoverDemo from './components/Popover/PopoverDemo'
import PopoverDemo2 from './components/Popover/PopoverDemo2'
import AvatarDemo2 from './components/Avatar/AvatarDemo2'
import AvatarDemo from './components/Avatar/AvatarDemo'
import CheckboxDemo from './components/Checkbox/CheckboxDemo'
import ButtonDemo from './components/Button/ButtonDemo'
import AlertDialogDemo from './components/AlertDialog/AlertDialogDemo'
import AccordionDemo from './components/Accordion/AccordionDemo'
import Box from './components/Box'
import AspectRatioDemo from './components/AspectRatio/AspectRatioDemo'
import CollapsibleDemo from './components/Collapsible/CollapsibleDemo'
import ContextMenuDemo from './components/ContextMenu/ContextMenuDemo'
import DialogDemo from './components/Dialog/DialogDemo'
// import { styled, keyframes } from '@stitches/react';
// import { violet, blackA, red, mauve, crimson, indigo } from '@radix-ui/colors';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <PopoverDemo/>
      <hr/> */}
      <Box>
        <Box>
          <PopoverDemo />
        </Box>
        <Box>
          <PopoverDemo2 />
        </Box>
      </Box>

      <Box>
        <AvatarDemo />
        {/* <AvatarDemo2/> */}
      </Box>
      <Box>
        <CheckboxDemo />
      </Box>

      <Box>
        <ButtonDemo />
      </Box>

      <Box
        // todo 样式不生效
        // styles={{ backgroundImage: `linear-gradient(120deg, $indigo6, $crimson5)` }}
        styles={{
          background:
            'linear-gradient(120deg, var(--indigo6) , var(--crimson5))',
        }}
      >
        <AlertDialogDemo />
      </Box>
      <Box height={300}>
        <AccordionDemo />
      </Box>

      <Box height={300}>
        <AspectRatioDemo />
      </Box>

      <Box
        height={250}
        styles={{
          alignItems: 'flex-start',
        }}
      >
        <CollapsibleDemo />
      </Box>

      <Box height={500}>
        <ContextMenuDemo />
      </Box>

      <Box>
        <DialogDemo/>
      </Box>
    </main>
  )
}
