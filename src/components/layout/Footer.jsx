import { Box, Text } from '@mantine/core'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: 135,
            padding: '0 25px',
            background: 'white',
            boxShadow: '0px 1px 0px #DEE0E3'
        }}>
            <Text sx={{fontSize: 12, color: '#6E6E6E'}}>Copyright 2022 HackSoft Ltd. All rights reserved. No part of this site may be reproduced without our written permission.</Text>
        </Box>
    )
}
