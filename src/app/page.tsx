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
import DropdownMenuDemo from './components/DropdownMenu/DropdownMenuDemo'

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
        <ButtonDemo />
      </Box>

      <Box
        title="Accordion"
        desc="A vertically stacked set of interactive headings that each reveal an associated section of content."
        height={300}
      >
        <AccordionDemo />
      </Box>

      <Box
        title="Alert Dialog"
        desc="A modal dialog that interrupts the user with important content and expects a response."
        // todo 样式不生效
        // styles={{ backgroundImage: `linear-gradient(120deg, $indigo6, $crimson5)` }}
        styles={{
          background:
            'linear-gradient(120deg, var(--indigo6) , var(--crimson5))',
        }}
      >
        <AlertDialogDemo />
      </Box>

      <Box
        title="Aspect Ratio"
        desc="Displays content within a desired ratio."
        height={300}
      >
        <AspectRatioDemo />
      </Box>

      <Box
        title="Avatar"
        desc="An image element with a fallback for representing the user."
      >
        <AvatarDemo />
        {/* <AvatarDemo2/> */}
      </Box>

      <Box
        title="Checkbox"
        desc="A control that allows the user to toggle between checked and not checked."
      >
        <CheckboxDemo />
      </Box>

      <Box
        title="Collapsible"
        desc="An interactive component which expands/collapses a panel."
        height={250}
        styles={{
          alignItems: 'flex-start',
        }}
      >
        <CollapsibleDemo />
      </Box>

      <Box
        title="Context Menu"
        desc="Displays a menu located at the pointer, triggered by a right-click or a long-press."
        height={300}
      >
        <ContextMenuDemo />
      </Box>

      <Box
        title="Dialog"
        desc="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      >
        <DialogDemo />
      </Box>

      <Box
        // styles={{
        //     alignItems: 'flex-start',
        //   }}
        title="Dropdown Menu"
        desc="Displays a menu to the user—such as a set of actions or functions—triggered by a button."
      >
        <DropdownMenuDemo />
      </Box>
    </main>
  )
}
