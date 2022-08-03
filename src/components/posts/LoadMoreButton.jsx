import React from 'react'
import { Box } from '@mantine/core'

import GenericButton from '../common/GenericButton'

export default function LoadMoreButton({ nextStep }) {
    return (
        <Box onClick={nextStep} sx={{ display: 'flex', justifyContent: 'center' }}>
            <GenericButton sx={{
                marginTop: 19,
                width: 117,
                height: 32,
            }}>
                Load more
            </GenericButton>
        </Box>
    )
}
