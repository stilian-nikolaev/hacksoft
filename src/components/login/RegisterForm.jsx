import React from 'react'
import { Box, Text } from '@mantine/core'
import { useMutation } from 'react-query'
import { useLoginUser, useRegisterUser } from '../../hooks/auth'
import TextField from '../common/TextField'
import GenericButton from '../common/GenericButton'
import GenericForm from '../common/GenericForm'
import { AuthStore } from '../../stores/AuthStore'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { routerEndpoints } from '../../service/routerEndpoints'
import { useCreateProfile } from '../../hooks/profile'

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().trim().min(1).max(40).required(),
    occupation: yup.string().trim().min(1).max(40).required(),
    password: yup.string().trim().min(6).max(40).required(),
    imageURL: yup.string().trim().min(6).max(800).required(),
  })

const initialValues = {
  email: '',
  password: '',
  name: '',
  occupation: '',
  imageURL: ''
}

export default function RegisterForm() {
  const { login, setprofileId} = AuthStore
  const navigate = useNavigate();

  const mutationFn = async data => {
    const authRes = await useRegisterUser({ email: data.email, password: data.password });
    const profileRes = await useCreateProfile(authRes.localId, {
      name: data.name,
      occupation: data.occupation,
      likes: 0,
      posts: 0,
      imageURL: data.imageURL
    });
    return { ...authRes, profile: profileRes }
  }

  const mutation = useMutation({
    mutationFn,
    onSuccess: (res) => {
      console.log(res);
      login(res.idToken, /*res.expiresIn*/3600)
      setprofileId(res.localId);
      navigate(routerEndpoints.home);
    }
  })

  function handleSubmit(data) {
    mutation.mutate(data)
  }


  return (
    <GenericForm validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center', }}>
        <Box sx={{ width: '50%' }}>
          <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Register to HacksoftFeed</Text>
          <TextField
            placeholder="Email*"
            label="Email"
            name="email"
            size="lg"
            required
            sx={(theme) => ({
              marginTop: '20px',
              '& ::placeholder': {
                color: `gray !important`

              }
            })}
          />
          <TextField
            placeholder="Password*"
            label="Password"
            name="password"
            type="password"
            size="lg"
            required
            sx={(theme) => ({
              marginTop: '20px',
              '& ::placeholder': {
                color: `gray !important`

              }
            })}
          />
          <TextField
            placeholder="Name*"
            label="Name"
            name="name"
            size="lg"
            required
            sx={(theme) => ({
              marginTop: '20px',
              '& ::placeholder': {
                color: `gray !important`

              }
            })}
          />
          <TextField
            placeholder="Occupation*"
            label="Occupation"
            name="occupation"
            size="lg"
            required
            sx={(theme) => ({
              marginTop: '20px',
              '& ::placeholder': {
                color: `gray !important`

              }
            })}
          />
          <TextField
            placeholder="Image URL*"
            label="Image URL"
            name="imageURL"
            size="lg"
            required
            sx={(theme) => ({
              marginTop: '20px',
              '& ::placeholder': {
                color: `gray !important`

              }
            })}
          />
          <Box sx={{ display: 'flex', marginTop: 40 }}>
            <GenericButton type="submit" sx={{ width: 'auto' }}>
              Log in
            </GenericButton>
            {/* <Text sx={{ marginLeft: 20 }}>
            Don't have an account?
            <Text
              onClick={handleSignUpClick}
              sx={(theme) => ({
                backgroundImage: `linear-gradient(${theme.colors.common[0]}, ${theme.colors.common[0]})`,
                width: '100px',
                backgroundSize: '0% 2px',
                backgroundRepeat: 'no-repeat',
                transition: 'background-size 0.2s',
                backgroundPosition: '50% calc(100%)',
                '&:hover': {
                  backgroundSize: '100% 2px',
                  cursor: 'pointer'
                }
              })}>
              Sign up here
            </Text>
          </Text> */}
          </Box>
        </Box>
      </Box>
    </GenericForm>
  )
}
