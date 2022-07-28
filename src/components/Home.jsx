import { Avatar, Image, Text, UnstyledButton, Box, Center } from '@mantine/core'
import React from 'react'
import Layout from './layout/Layout'

export default function Home() {
    return (
        <Layout>
            <Box sx={{
                display: 'flex'
            }}>
                <Box sx={{ minWidth: 220, height: 130, background: 'white', border: '1px solid rgba(123, 124, 129, 0.2)', borderRadius: '6px', marginRight: 20 }}>

                    <Box sx={{ height: 70, display: 'flex', padding: '5px 5px 10px 10px' }}>
                        <Avatar src="/avatar.jpg" sx={{ alignSelf: 'flex-end' }} size={50} radius="50%" alt="Avatar" />
                        <Box sx={{ marginLeft: 10, alignSelf: 'center' }}>
                            <Text sx={{ fontSize: 16, fontWeight: 'bold' }}>Ivailo Buchvarov</Text>
                            <Text sx={{
                                fontSize: 13, color: '#65676B'
                            }}>Co-Founder, HackSoft</Text>
                        </Box>
                        <Box sx={{ display: 'flex'}} >
                            <Image sx={{ position: 'absolute', width: 13 }} src="/edit-icon.svg" alt="edit-icon" />
                        </Box>
                    </Box>
                    <Box sx={{ height: 60, display:'flex', borderTop: '1px solid rgba(123, 124, 129, 0.2)' }}>
                        <Center sx={{  width: '50%', borderRight: '1px solid rgba(123, 124, 129, 0.2)' }}>
                            <Box sx={{textAlign: 'center'}}>
                                <Text sx={{ fontSize: 16, fontWeight: 'bold' }}>201</Text>
                                <Text sx={{fontSize: 14, color: '#65676B' }}>Likes</Text>
                            </Box>
                        </Center>
                        <Center sx={{ width: '50%' }}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Text sx={{ fontSize: 16, fontWeight: 'bold' }}>4</Text>
                                <Text sx={{fontSize: 14, color: '#65676B'}}>Posts</Text>
                            </Box>
                        </Center>
                    </Box>

                </Box>
                <Box sx={{ width: '100%', background: 'white', border: '1px solid rgba(123, 124, 129, 0.2)', borderRadius: '6px' }}>
                    <Box sx={{ padding: 30,}}>
                        <Text sx={{ fontSize: 16 }}>Share something to the community...</Text>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        height: 45,
                        justifyContent: 'right',
                        borderTop: '1px solid rgba(123, 124, 129, 0.2)',
                        padding: '7px 15px'
                    }}>
                        <UnstyledButton sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '2px 25px',
                            gap: 10,
                            width: 79,
                            height: 32,
                            background: '#FD7500',
                            borderRadius: 4,
                            fontSize: 14,
                            color: 'white'
                        }}>
                            Post
                        </UnstyledButton>
                    </Box>

                </Box>
            </Box>
        </Layout >
    )
}
