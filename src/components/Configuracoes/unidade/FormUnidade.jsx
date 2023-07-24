import Router from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { api } from 'src/configs/api'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import DialogForm from 'src/components/Defaults/Dialogs/Dialog'
import { formType } from 'src/configs/defaultConfigs'
import FormHeader from '../../Defaults/FormHeader'
import { toastMessage } from 'src/configs/defaultConfigs'
import { formatDate } from 'src/configs/conversions'
import { AuthContext } from 'src/context/AuthContext'
import Input from 'src/components/Form/Input'
import FileInput from 'src/components/Form/File'

const FormUnidade = ({ paramFornecedorUnidadeID }) => {
    const { user, setLoggedUnity, loggedUnity } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const [data, setData] = useState()
    //* Componente é chamado na tela da unidade e Meus dados do fornecedor
    const id = paramFornecedorUnidadeID ? paramFornecedorUnidadeID : Router.query.id //? id vem por parametro se for home do fornecedor
    const router = Router
    const type = formType(router.pathname) // Verifica se é novo ou edição
    const staticUrl = '/configuracoes/unidade'

    const {
        trigger,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
        register
    } = useForm()

    //? Função que busca o CEP
    const handleCep = async cep => {
        if (cep.length == 9) {
            //? Obter apenas núemros da string
            const cepNumber = cep.replace(/\D/g, '')
            api.get('https://viacep.com.br/ws/' + cepNumber + '/json/').then(response => {
                console.log('busca cep', response.data)
                if (response.data.localidade) {
                    setValue('fields.logradouro', response.data.logradouro)
                    setValue('fields.bairro', response.data.bairro)
                    setValue('fields.cidade', response.data.localidade)
                    setValue('fields.uf', response.data.uf)
                    toast.success('Endereço encontrado!')
                } else {
                    toast.error('Endereço não encontrado!')
                }
            })
        }
    }

    // Função que atualiza os dados ou cria novo dependendo do tipo da rota
    const onSubmit = async datas => {
        const data = {
            ...datas.fields,
            dataCadastro: formatDate(datas.dataCadastro, 'YYYY-MM-DD')
        }

        console.log('🚀 ~ data:', data)

        try {
            if (type === 'new') {
                await api.post(`${staticUrl}/novo`, data)
                toast.success(toastMessage.successNew)
                reset(data)
            } else if (type === 'edit') {
                await api.put(`${staticUrl}/${id}`, data)
                toast.success(toastMessage.successUpdate)
                console.log(data)
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.errorRepeated)
            } else {
                console.log(error)
            }
        }

        // Atualiza os dados do usuário logado no contexto
        for (const key in loggedUnity) {
            if (key in data) {
                loggedUnity[key] = data[key]
            }
        }

        // Atualiza os dados do usuário logado no localStorage
        localStorage.setItem('loggedUnity', JSON.stringify(loggedUnity))
    }

    // Função que deleta os dados
    const handleClickDelete = async () => {
        try {
            await api.delete(`${staticUrl}/${id}`)
            router.push(staticUrl)
            toast.success(toastMessage.successDelete)
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.pendingDelete)
                setOpen(false)
            } else {
                console.log(error)
            }
        }
    }

    //? Função que traz os dados quando carrega a página e atualiza quando as dependências mudam
    const getData = async () => {
        try {
            const response = await api.get(`${staticUrl}/${id}`)
            reset(response.data)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
        setTimeout(() => {
            trigger()
        }, 300)
    }, [])

    return (
        <>
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormHeader
                        btnCancel={user.papelID === 1 ? true : false}
                        btnSave
                        handleSubmit={() => handleSubmit(onSubmit)}
                        btnDelete={type === 'edit' && user.papelID === 1 ? true : false}
                        onclickDelete={() => setOpen(true)}
                    />
                    <CardContent>
                        <Grid container spacing={4}>
                            <Input
                                xs={12}
                                md={4}
                                title='Nome Fantasia'
                                name='fields.nomeFantasia'
                                required={true}
                                register={register}
                                errors={errors?.fields?.nomeFantasia}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Razão Social'
                                name='fields.razaoSocial'
                                required={true}
                                register={register}
                                errors={errors?.fields?.razaoSocial}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='CNPJ'
                                name='fields.cnpj'
                                mask='cnpj'
                                required={true}
                                register={register}
                                errors={errors?.fields?.cnpj}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Responsável'
                                name='fields.responsavel'
                                required={true}
                                register={register}
                                errors={errors?.fields?.responsavel}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='E-mail'
                                name='fields.email'
                                type='email'
                                required={true}
                                register={register}
                                errors={errors?.fields?.email}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Telefone 1'
                                name='fields.telefone1'
                                mask='telefone'
                                required={false}
                                register={register}
                                errors={errors?.fields?.telefone1}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Telefone 2'
                                name='fields.telefone2'
                                mask='telefone'
                                required={false}
                                register={register}
                                errors={errors?.fields?.telefone2}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='CEP'
                                name='fields.cep'
                                getAddressByCep={handleCep}
                                mask='cep'
                                required={false}
                                register={register}
                                errors={errors?.fields?.cep}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Rua'
                                name='fields.logradouro'
                                required={false}
                                register={register}
                                errors={errors?.fields?.logradouro}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Número'
                                name='fields.numero'
                                required={false}
                                register={register}
                                errors={errors?.fields?.numero}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Complemento'
                                name='fields.complemento'
                                required={false}
                                register={register}
                                errors={errors?.fields?.complemento}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Bairro'
                                name='fields.bairro'
                                required={false}
                                register={register}
                                errors={errors?.fields?.bairro}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='Cidade'
                                name='fields.cidade'
                                required={false}
                                register={register}
                                errors={errors?.fields?.cidade}
                            />
                            <Input
                                xs={12}
                                md={4}
                                title='UF'
                                name='fields.uf'
                                mask='estado'
                                required={false}
                                register={register}
                                errors={errors?.fields?.uf}
                            />
                        </Grid>
                    </CardContent>
                </form>
            </Card>
            <Card sx={{ mt: 4 }}>
                <CardContent>
                    <Grid container spacing={4}>
                        <Input
                            xs={12}
                            md={4}
                            title='Titulo do relatório'
                            name='titleReport'
                            required={false}
                            register={register}
                            errors={errors?.fields?.titleReport}
                        />
                        <FileInput label='Nenhum arquivo selecionado' />
                    </Grid>
                </CardContent>
            </Card>
            {type === 'edit' && data && (
                <Typography variant='caption' sx={{ display: 'flex', justifyContent: 'end', p: 4 }}>
                    Data de cadastro:
                    {formatDate(data.fields.dataCadastro, 'DD/MM/YYYY')}
                </Typography>
            )}
            <DialogForm
                title='Excluir dado'
                text='Tem certeza que deseja excluir?'
                openModal={open}
                handleClose={() => setOpen(false)}
                handleSubmit={handleClickDelete}
                btnCancel
                btnConfirm
            />
        </>
    )
}

export default FormUnidade

// 579
