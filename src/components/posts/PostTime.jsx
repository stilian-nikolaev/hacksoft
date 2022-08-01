import { Text } from '@mantine/core'
import React from 'react'

const INITIAL_SECONDS = 120;
const SECONDS_TO_MINUTES = 60;
const SECONDS_TO_HOURS = 3600;
const SECONDS_TO_DAYS = 86400;
const SECONDS_TO_WEEKS = 604800;
const SECONDS_TO_MONTHS = 2419200;
const SECONDS_TO_YEARS = 29030400;

export default function PostTime({createdAt}) {
    const secondsAgo = (Date.now() - createdAt) / 1000;

    let time;
    if (secondsAgo < INITIAL_SECONDS) time = 'Just now'
    else if (secondsAgo < SECONDS_TO_HOURS) time = `${(secondsAgo / SECONDS_TO_MINUTES).toFixed()} minutes ago`
    else if (secondsAgo < SECONDS_TO_DAYS) time = `${(secondsAgo / SECONDS_TO_HOURS).toFixed()} hours ago`
    else if (secondsAgo < SECONDS_TO_WEEKS) time = `${(secondsAgo / SECONDS_TO_DAYS).toFixed()}d ago`
    else if (secondsAgo < SECONDS_TO_MONTHS) time = `${(secondsAgo / SECONDS_TO_WEEKS).toFixed()}w ago`
    else if (secondsAgo < SECONDS_TO_YEARS) time = `${(secondsAgo / SECONDS_TO_MONTHS).toFixed()}m ago`
    else time = `${(secondsAgo / SECONDS_TO_YEARS).toFixed()}y ago`

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
