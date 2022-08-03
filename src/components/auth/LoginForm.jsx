import React from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Box, Text } from '@mantine/core'
import * as yup from 'yup'

import { useLoginUser } from '../../hooks/auth'
import TextField from '../common/TextField'
import GenericButton from '../common/GenericButton'
import GenericForm from '../common/GenericForm'
import { AuthStore } from '../../stores/AuthStore'
import { routerEndpoints } from '../../service/routerEndpoints'

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().trim().min(1).max(40).required(),
  })

const initialValues = {
  email: '',
  password: ''
}

export default function LoginForm() {
  const { login, setprofileId } = AuthStore
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: data => useLoginUser(data),
    onSuccess: (res) => {
      login(res.idToken, res.expiresIn)
      setprofileId(res.localId);
      navigate(routerEndpoints.home)
    }
  })

  function handleSubmit(data) {
    mutation.mutate(data)
  }

  function handleSignUpClick() {
    navigate(routerEndpoints.register)

  }

  return (
    <GenericForm validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center', }}>
        <Box sx={{ width: '50%' }}>
          <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Log in to HacksoftFeed</Text>
          <TextField
            placeholder="Email*"
            label="Email"
            name="email"
            size="lg"
            required
            sx={{ marginTop: '20px', '& ::placeholder': { color: `gray !important` } }}
          />
          <TextField
            placeholder="Password*"
            label="Password"
            name="password"
            type="password"
            size="lg"
            required
            sx={{ marginTop: '20px', '& ::placeholder': { color: `gray !important` } }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
            <GenericButton type="submit" sx={{ width: 'auto' }}>
              Log in
            </GenericButton>
            <Text sx={{ marginLeft: 20 }}>
              Don't have an account?
              <Text
                onClick={handleSignUpClick}
                sx={{
                  backgroundImage: `linear-gradient(black, black)`,
                  width: '100px',
                  backgroundSize: '0% 2px',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-size 0.2s',
                  backgroundPosition: '50% calc(100%)',
                  '&:hover': {
                    backgroundSize: '100% 2px',
                    cursor: 'pointer'
                  }
                }}>
                Sign up here
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </GenericForm>
  )
}
