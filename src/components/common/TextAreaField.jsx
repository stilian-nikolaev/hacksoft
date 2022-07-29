import { Textarea } from '@mantine/core'
import { useField } from 'formik'
import React from 'react'

export default function TextAreaField({name, ...props}) {
    const [field, meta] = useField(name);

    return (
        <Textarea
        {...field}
        {...props}
        />
    )
}
