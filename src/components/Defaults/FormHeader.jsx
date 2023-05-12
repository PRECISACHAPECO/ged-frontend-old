import Router from 'next/router'
import { useState, useContext, useEffect } from 'react'

import { CardContent, Button, Box } from '@mui/material'
import Link from 'next/link'
import Icon from 'src/@core/components/icon'
import { backRoute } from 'src/configs/defaultConfigs'
import MenuReports from './MenuReports'
import { AuthContext } from 'src/context/AuthContext'
import Fab from '@mui/material/Fab'

const FormHeader = ({
    btnCancel,
    btnSave,
    handleSubmit,
    btnDelete,
    onclickDelete,
    btnPrint,
    disabled,
    generateReport,
    dataReports
}) => {
    const router = Router
    const { routes } = useContext(AuthContext)
    const [isVisible, setIsVisible] = useState(false)
    const dynamicRoute = router.pathname.split('/').slice(0, -1).join('/')
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    //? Verifica se o usuário deu scroll na página e mostra o botão de salvar
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    console.log('vizibilidade', isVisible)

    return (
        <>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: '8px' }}>
                    {btnCancel && (
                        <Link href={backRoute(router.pathname)}>
                            <Button type='button' variant='outlined' color='primary' size='medium'>
                                <Icon icon='material-symbols:arrow-back-rounded' />
                            </Button>
                        </Link>
                    )}

                    {btnDelete && routes.find(route => route.rota === dynamicRoute && route.excluir) && (
                        <Button
                            type='button'
                            onClick={onclickDelete}
                            variant='outlined'
                            color='error'
                            size='medium'
                            startIcon={<Icon icon='material-symbols:delete-outline' />}
                        >
                            Excluir
                        </Button>
                    )}
                </Box>

                <Box sx={{ display: 'flex', gap: '8px' }}>
                    {/* Imprimir com 1 opção */}
                    {btnPrint && dataReports.length === 1 && (
                        <Button
                            id='fade-button'
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={() => generateReport(dataReports[0])}
                            color='primary'
                            disabled={disabled}
                            variant='outlined'
                            size='medium'
                            type='button'
                            startIcon={<Icon icon='material-symbols:print' />}
                        >
                            Imprimir
                        </Button>
                    )}
                    {/* Imprimir com +1 opção (dropdown) */}
                    {btnPrint && dataReports.length > 1 && (
                        <>
                            <Button
                                id='fade-button'
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup='true'
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                color='primary'
                                disabled={disabled}
                                variant='outlined'
                                size='medium'
                                type='button'
                                startIcon={<Icon icon='material-symbols:print' />}
                            >
                                Imprimir
                            </Button>
                            <MenuReports
                                generateReport={generateReport}
                                dataReports={dataReports}
                                handleClick={handleClick}
                                handleClose={handleClose}
                                open={open}
                                anchorEl={anchorEl}
                            />
                        </>
                    )}

                    {btnSave && routes.find(route => route.rota === dynamicRoute && route.editar) && (
                        <Button
                            onClick={handleSubmit}
                            type='submit'
                            variant='outlined'
                            size='medium'
                            color='primary'
                            disabled={disabled}
                            startIcon={<Icon icon='material-symbols:save' />}
                        >
                            Salvar
                        </Button>
                    )}

                    {isVisible && (
                        <div
                            className={`
                                ${isVisible ? 'fadeIn' : 'fadeOut'}
                            `}
                            style={{
                                position: 'fixed',
                                bottom: '40px',
                                right: '30px',
                                zIndex: '5555',
                                textAlign: 'center'
                            }}
                        >
                            <Fab
                                color='primary'
                                size='large'
                                onClick={handleSubmit}
                                type='submit'
                                variant='contained'
                                disabled={disabled}
                            >
                                <Icon icon='material-symbols:save' />
                            </Fab>
                        </div>
                    )}
                </Box>
            </CardContent>
        </>
    )
}

export default FormHeader
