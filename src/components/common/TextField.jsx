import React from 'react'
import { useField } from 'formik'
import { Box, TextInput } from '@mantine/core';


export default function TextField({ name,  ...props }) {
    const [field, meta] = useField(name);
    // const message = meta.touched && meta.error ? `${props.placeholder} ${meta.error.split(' ').splice(1).join(' ')}` : '';

    return (
        <Box>
            <TextInput
                {...field}
                {...props}
                error={meta.error && meta.touched}
                // description={message} 
                />
        </Box>
    )
}