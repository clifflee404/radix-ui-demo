import React from 'react'
// import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { styled, keyframes } from '@stitches/react'
import { violet, blackA, red, mauve } from '@radix-ui/colors'

const ButtonDemo = () => (
  <Flex>
    <Button>Delete account</Button>
    <Button variant="mauve" css={{ marginRight: 25 }}>
      Cancel
    </Button>
    <Button variant="red">Yes, delete account</Button>
  </Flex>
)

const Flex = styled('div', { display: 'flex', flexDirection: 'column', gap:'20px' })

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  cursor: 'pointer',

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        '&:hover': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        '&:hover': { backgroundColor: mauve.mauve5 },
        '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
})

export default ButtonDemo
