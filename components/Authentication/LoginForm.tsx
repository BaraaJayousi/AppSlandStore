'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

import Grid from '@mui/material/Grid2';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// Icons
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { signinAction } from '@/actions/auth';
import { AxiosError } from 'axios';

const LoginForm = () => {

  //ToDo - Handle submission when successful
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return(
    <>
      <Formik
        initialValues={{
          username: 'mor_2314',
          password: '83r5^_',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required('Username is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          setSubmitting(true)
          try{
            const response = await signinAction(values)
            if(response === 401){
              throw 'Incorrect Username or Password, try password: 83r5^_   username: mor_2314'
            }
          }catch(err: any){
            setErrors({submit : err})
            setSubmitting(false)
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid  size={{xs:12}}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="username-login">Username</InputLabel>
                  <OutlinedInput
                    id="username-login"
                    type="text"
                    value={values.username}
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Your username"
                    fullWidth
                    dir="ltr"
                    error={Boolean(touched.username && errors.username)}
                  />
                  {touched.username && errors.username && (
                    <FormHelperText error id="standard-weight-helper-text-username-login">
                      {errors.username}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid  size={{xs:12}}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    dir="ltr"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid  size={{xs:12}} sx={{ mt: -1 }}>
                <Stack direction="row-reverse" justifyContent="space-between" alignItems="center" spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography variant="subtitle1">Remember Me</Typography>}
                  />
                  <Typography  color="text.primary">
                    Forget your password?
                  </Typography>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid  size={{xs:12}}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid  size={{xs:12}}>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Sign In
                  </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm