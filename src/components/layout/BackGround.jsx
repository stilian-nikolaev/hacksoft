import { Image } from '@mantine/core'
import React from 'react'

export default function BackGround() {
    return (
        <>
            <Image src="/orange-triangle.svg" sx={{ width: '56vw', position: 'fixed', zIndex: -1, top: 67, right: 0 }} />
            <Image src="/gray-square.svg" sx={{ width: '53vw', position: 'fixed', zIndex: -1, bottom: 0 }} />
        </>
    )
}
