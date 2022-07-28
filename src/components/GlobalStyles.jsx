import { Global } from '@mantine/core'
import React from 'react'

export default function GlobalStyles() {
  return (
      <Global
          styles={(theme) => ({
              body: {
                  backgroundColor: '#F6F7F9',
              },
          })}
      />
  )
}
