import React from 'react'
import { Text } from '@mantine/core'

const SECONDS_TO_MINUTES = 60;
const SECONDS_TO_HOURS = 3600;
const SECONDS_TO_DAYS = 86400;
const SECONDS_TO_WEEKS = 604800;
const SECONDS_TO_MONTHS = 2419200;
const SECONDS_TO_YEARS = 29030400;

const optionalS = value => value == '1' ? '' : 's';

function getTime(seconds) {
    let time;

    if (seconds < SECONDS_TO_MINUTES) time = 'Just now'
    else if (seconds < SECONDS_TO_HOURS) time = `${(seconds / SECONDS_TO_MINUTES).toFixed()} minute${optionalS((seconds / SECONDS_TO_MINUTES).toFixed())} ago`
    else if (seconds < SECONDS_TO_DAYS) time = `${(seconds / SECONDS_TO_HOURS).toFixed()} hour${optionalS((seconds / SECONDS_TO_HOURS).toFixed())} ago`
    else if (seconds < SECONDS_TO_WEEKS) time = `${(seconds / SECONDS_TO_DAYS).toFixed()}d ago`
    else if (seconds < SECONDS_TO_MONTHS) time = `${(seconds / SECONDS_TO_WEEKS).toFixed()}w ago`
    else if (seconds < SECONDS_TO_YEARS) time = `${(seconds / SECONDS_TO_MONTHS).toFixed()}m ago`
    else time = `${(seconds / SECONDS_TO_YEARS).toFixed()}y ago`

    return time
}

export default function PostTime({ createdAt }) {
    const secondsAgo = (Date.now() - createdAt) / 1000;
    const time = getTime(secondsAgo);

    return (
        <Text sx={{
            fontSize: 12,
            color: '#65676B',
            '@media (max-width: 550px)': {
                marginTop: 10
            },
        }}>
            {time}
        </Text>
    )
}
