// ** Next Import
import Link from 'next/link'
import { api } from 'src/configs/api'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import FormControl from '@mui/material/FormControl'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: 450 }
}))

import { useEffect, useState, onChange } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { cpfMask, cnpjMask } from 'src/configs/masks'
import { validationCPF, validationCNPJ, validationEmail } from 'src/configs/validations'
import Router from 'next/router'
import { toast } from 'react-hot-toast'
import Logo from 'src/components/Defaults/Logo'
import { Alert } from '@mui/material'

const EsqueceuSenha = () => {
    // ** Hook
    const theme = useTheme()
    const [type, setType] = useState()
    const [email, setEmail] = useState()
    const [nome, setNome] = useState()
    const router = Router

    const emailToShow = email?.replace(/^(.{4}).*@/, '$1...@')

    useEffect(() => {
        setType(router.query.type)
    }, [])

    const {
        handleSubmit,
        formState: { errors },
        setValue,
        register
    } = useForm({})

    function OnchangeValue(value) {
        setEmail(null)
        if (type == 'login' && value.length == 14 && validationCPF(value)) {
            api.post(`esqueceuSenha/validation?type=${type}`, { data: value }).then(response => {
                setEmail(response.data[0]?.email)
                setNome(response.data[0]?.nome)
            })
        } else if (type == 'fornecedor' && value.length == 18 && validationCNPJ(value)) {
            api.post(`esqueceuSenha/validation?type=${type}`, { data: value }).then(response => {
                setEmail(response.data[0]?.email)
                setNome(response.data[0]?.nome)
            })
        }
    }
    console.log(email)

    const onSubmit = value => {
        const newValue = {
            ...value,
            email,
            nome
        }
        console.log(value)
        api.post(`/esqueceuSenha?type=${type}`, { data: newValue }).then(response => {
            toast.success('Email enviado com sucesso!')
        })
    }

    return (
        <Box className='content-center'>
            <Card sx={{ zIndex: 1 }} style={{ width: 'min(500px, 96%)' }}>
                <CardContent sx={{ p: theme => `${theme.spacing(15.5, 7, 8)} !important` }}>
                    <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Logo />
                    </Box>
                    <Box sx={{ mb: 6.5 }}>
                        <Typography variant='h5' sx={{ mb: 1.5, letterSpacing: '0.18px', fontWeight: 600 }}>
                            Esqueceu sua senha? 🔒
                        </Typography>
                        <Typography variant='body2'>
                            {type === 'login'
                                ? 'Digite seu CPF e enviaremos instruções para redefinir sua senha'
                                : 'Digite seu CNPJ e enviaremos instruções para redefinir sua senha'}
                        </Typography>
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {type === 'login' ? (
                            <FormControl fullWidth>
                                <TextField
                                    label='CPF'
                                    placeholder='CPF'
                                    aria-describedby='validation-schema-nome'
                                    name='cpf'
                                    {...register(`cpf`, {
                                        required: true,
                                        validate: value => validationCPF(value) || 'CPF inválido'
                                    })}
                                    error={errors.cpf}
                                    helperText={errors.cpf?.message}
                                    inputProps={{
                                        maxLength: 14,
                                        onChange: e => {
                                            setValue('cpf', cpfMask(e.target.value))
                                            OnchangeValue(e.target.value)
                                        }
                                    }}
                                />
                            </FormControl>
                        ) : (
                            <FormControl fullWidth>
                                <TextField
                                    label='CNPJ'
                                    placeholder='CPF'
                                    aria-describedby='validation-schema-nome'
                                    name='cnpj'
                                    {...register(`cnpj`, {
                                        required: true,
                                        validate: value => validationCNPJ(value) || 'CNPJ inválido'
                                    })}
                                    error={errors.cnpj}
                                    helperText={errors.cnpj?.message}
                                    inputProps={{
                                        maxLength: 18,
                                        onChange: e => {
                                            setValue('cnpj', cnpjMask(e.target.value))
                                            OnchangeValue(e.target.value)
                                        }
                                    }}
                                />
                            </FormControl>
                        )}

                        {email && (
                            <Alert severity='info' sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: 11 }}>
                                    O email com os dados será enviado para {emailToShow}
                                </Typography>
                            </Alert>
                        )}

                        <Button
                            fullWidth
                            size='large'
                            type='submit'
                            variant='contained'
                            sx={{ mb: 5.25, mt: 4 }}
                            disabled={!email || !validationEmail(email)}
                        >
                            Enviar
                        </Button>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography
                                component={Link}
                                href={type === 'login' ? '/login' : '/fornecedor'}
                                sx={{
                                    display: 'flex',
                                    '& svg': { mr: 1.5 },
                                    alignItems: 'center',
                                    color: 'primary.main',
                                    textDecoration: 'none',
                                    justifyContent: 'center'
                                }}
                            >
                                <Icon icon='mdi:chevron-left' fontSize='2rem' />
                                <span>Voltar para o login</span>
                            </Typography>
                        </Box>
                    </form>
                </CardContent>
            </Card>
            <FooterIllustrationsV1 image={`/images/pages/auth-v1-forgot-password-mask-${theme.palette.mode}.png`} />
        </Box>
    )
}
EsqueceuSenha.getLayout = page => <BlankLayout>{page}</BlankLayout>
EsqueceuSenha.guestGuard = true

export default EsqueceuSenha
