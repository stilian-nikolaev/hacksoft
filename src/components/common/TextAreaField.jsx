import React from 'react'
import { Textarea } from '@mantine/core'
import { useField } from 'formik'

export default function TextAreaField({ name, ...props }) {
    const [field] = useField(name);

    return (
        <Textarea
            {...field}
            {...props}
        />
    )
}
