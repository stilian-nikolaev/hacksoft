import React from 'react'
import { useField } from 'formik'
import { TextInput } from '@mantine/core';


export default function TextField({ name, ...props }) {
    const [field, meta] = useField(name);

    return (
        <TextInput
            {...field}
            {...props}
            error={meta.error && meta.touched}
        />
    )
}