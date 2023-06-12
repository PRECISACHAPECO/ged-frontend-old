// import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

//* Default Form Components
import Fields from 'src/components/Defaults/Formularios/Fields'
import Block from 'src/components/Defaults/Formularios/Block'
import DialogFormStatus from '../Defaults/Dialogs/DialogFormStatus'

import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    ListItem,
    ListItemButton,
    Radio,
    RadioGroup,
    TextField,
    Tooltip,
    Typography
} from '@mui/material'
import Router from 'next/router'
import { backRoute } from 'src/configs/defaultConfigs'
import { generateReport } from 'src/configs/defaultConfigs'
import { api } from 'src/configs/api'
import FormHeader from 'src/components/Defaults/FormHeader'
import { ParametersContext } from 'src/context/ParametersContext'
import { AuthContext } from 'src/context/AuthContext'
import Loading from 'src/components/Loading'
import { formType, toastMessage } from 'src/configs/defaultConfigs'
import toast from 'react-hot-toast'
import { Checkbox } from '@mui/material'
import { SettingsContext } from 'src/@core/context/settingsContext'
import DialogFormConclusion from '../Defaults/Dialogs/DialogFormConclusion'
import { cnpjMask, cellPhoneMask, cepMask, ufMask } from 'src/configs/masks'

// Date
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br' // import locale

const FormRecebimentoMp = () => {
    const { user, loggedUnity } = useContext(AuthContext)
    const { setTitle } = useContext(ParametersContext)
    const [isLoading, setLoading] = useState(false)
    const [savingForm, setSavingForm] = useState(false)
    const [validateForm, setValidateForm] = useState(false) //? Se true, valida campos obrigatórios

    const [openModalStatus, setOpenModalStatus] = useState(false)
    const [fieldsState, setFields] = useState([])
    const [data, setData] = useState(null)
    const [fieldProducts, setFieldsProducts] = useState([])
    const [dataProducts, setDataProducts] = useState([])
    const [removedProducts, setRemovedProducts] = useState([])
    const [blocos, setBlocos] = useState([])
    const [info, setInfo] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [listErrors, setListErrors] = useState({ status: false, errors: [] })

    const router = Router
    const { id } = router.query
    const staticUrl = backRoute(router.pathname) // Url sem ID
    const type = formType(router.pathname) // Verifica se é novo ou edição

    const { settings } = useContext(SettingsContext)

    const {
        trigger,
        reset,
        register,
        getValues,
        setValue,
        handleSubmit,
        clearErrors,
        setError,
        formState: { errors }
    } = useForm()

    console.log('errors: ', errors)
    console.log('listErrors: ', listErrors)

    const getAddressByCep = cepString => {
        if (cepString.length == 9) {
            const cep = cepString.replace(/[^0-9]/g, '')
            api.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
                if (response.data.localidade) {
                    setValue('header.logradouro', response.data.logradouro)
                    setValue('header.bairro', response.data.bairro)
                    setValue('header.cidade', response.data.localidade)
                    setValue('header.estado', response.data.uf)
                    toast.success('Endereço encontrado!')
                } else {
                    toast.error('Endereço não encontrado!')
                }
            })
        }
    }

    //* Reabre o formulário pro fornecedor alterar novamente se ainda nao estiver vinculado com recebimento
    const changeFormStatus = async status => {
        const data = {
            status: status,
            auth: {
                usuarioID: user.usuarioID,
                papelID: user.papelID,
                unidadeID: loggedUnity.unidadeID
            }
        }

        try {
            setSavingForm(true)
            await api.post(`${staticUrl}/changeFormStatus/${id}`, data).then(response => {
                toast.success(toastMessage.successUpdate)
                setSavingForm(false)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addProduct = () => {
        const newProduct = [...dataProducts]
        const newProductFields = fieldProducts.map((field, index) => {
            if (field.tabela) {
                // Select (objeto com id e nome)
                return {
                    [field.tabela]: {
                        id: '',
                        nome: ''
                    }
                }
            } else {
                return {
                    [field.nomeColuna]: ''
                }
            }
        })
        newProduct.push(newProductFields)
        setDataProducts(newProduct)
    }

    // Nomes e rotas dos relatórios passados para o componente FormHeader/MenuReports
    const dataReports = [
        {
            id: 1,
            name: 'recebimentoMP',
            identification: '01',
            route: 'relatorio/recebimentoMP',
            params: {
                recebimentompID: id,
                unidadeID: loggedUnity.unidadeID
            }
        },
        {
            id: 2,
            name: 'Recepção',
            identification: '02',
            route: '/relatorio/recepcao'
        }
    ]

    const getData = () => {
        setLoading(true)
        api.post(`${staticUrl}/getData/${id}`, { type: type, unidadeID: loggedUnity.unidadeID }).then(response => {
            console.log('getData: ', response.data)

            setFields(response.data.fields)
            setData(response.data.data)
            setFieldsProducts(response.data.fieldsProducts)
            setDataProducts(response.data.dataProducts)
            setBlocos(response.data.blocos)
            setInfo(response.data.info)

            initializeValues(response.data)

            setLoading(false)
        })
    }

    const removeProduct = (value, index) => {
        if (dataProducts.length == 1) {
            toast.error('Você deve ter ao menos um produto!')
            return
        }

        // Remove o item do array dataProducts
        const updatedDataProducts = [...dataProducts]
        updatedDataProducts.splice(index, 1)
        setDataProducts(updatedDataProducts)

        // Insere ID no array de produtos removidos
        if (value?.recebimentompProdutoID > 0) {
            const newRemovedProducts = [...removedProducts, { recebimentompProdutoID: value.recebimentompProdutoID }] // Atribui o valor atual a uma nova variável
            console.log('🚀 ~ newRemovedProducts:', newRemovedProducts)
            setRemovedProducts(newRemovedProducts) // Atualiza a variável de estado
        }

        reset({
            ...getValues(), // Obtém os valores atuais de todos os campos
            produtos: updatedDataProducts // Atualiza apenas o campo "produtos"
        })
        trigger()

        toast.success('Produto pré-removido. Salve para concluir!')
    }

    const initializeValues = values => {
        values.fields.map(field => {
            if (field.tipo == 'int') {
                setValue(`header.${field.tabela}`, values.data?.[field.tabela] ? values.data?.[field.tabela] : null)
            } else {
                setValue(`header.${field.nomeColuna}`, values.data?.[field.nomeColuna])
            }
        })

        // Seta autocomplete com o valor do banco em um objeto com id e nome
        values.dataProducts.map((data, indexData) => {
            values.fieldsProducts.map((field, indexFields) => {
                if (field.tipo == 'int') {
                    setValue(
                        `produtos[${indexData}].${field.tabela}`,
                        data?.[field.tabela] ? data?.[field.tabela] : null
                    )
                } else {
                    setValue(`produtos[${indexData}].${field.nomeColuna}`, data?.[field.nomeColuna])
                }
            })
        })

        // Seta bloco com o valor do banco em um objeto com id e nome
        values.blocos.map((block, indexBlock) => {
            block.itens.map((item, indexItem) => {
                if (item?.resposta) {
                    setValue(`blocos[${indexBlock}].itens[${indexItem}].resposta`, item?.resposta)
                }
            })
        })

        // Seta infos
        setValue('obs', values.info?.obs)
        setValue('status', values.info?.status)
    }

    const checkErrors = () => {
        clearErrors()
        let hasErrors = false
        let arrErrors = []

        //? Header
        fieldsState.forEach((field, index) => {
            const fieldName = field.tabela ? `header.${field.tabela}` : `header.${field.nomeColuna}`
            const fieldValue = getValues(fieldName)
            if (field.obrigatorio === 1 && !fieldValue) {
                setError(fieldName, {
                    type: 'manual',
                    message: 'Campo obrigatório'
                })
                arrErrors.push(field?.nomeCampo)
                hasErrors = true
            }
        })

        //? Produtos
        dataProducts.forEach((data, index) => {
            fieldProducts.forEach((field, index) => {
                const fieldName = `produtos[${index}].${field.tabela}`
                const fieldValue = getValues(fieldName)

                if (field.obrigatorio === 1 && !fieldValue) {
                    setError(fieldName, {
                        type: 'manual',
                        message: 'Campo obrigatário'
                    })
                    arrErrors.push(field?.nomeCampo)
                    hasErrors = true
                }
            })
        })

        //? Blocos
        blocos.forEach((block, indexBlock) => {
            block.itens.forEach((item, indexItem) => {
                const fieldValue = getValues(`blocos[${indexBlock}].itens[${indexItem}].resposta`)
                if (item?.obrigatorio === 1 && !fieldValue) {
                    setError(`blocos[${indexBlock}].itens[${indexItem}].resposta`, {
                        type: 'manual',
                        message: 'Campo obrigatário'
                    })
                    arrErrors.push(item?.nome)
                    hasErrors = true
                }
            })
        })

        console.log('🚀 ~ arrErrors:', arrErrors)

        setListErrors({
            status: hasErrors,
            errors: arrErrors
        })
    }

    const handleSendForm = () => {
        checkErrors()
        setOpenModal(true)
        setValidateForm(true)
    }

    const conclusionForm = async values => {
        values['conclusion'] = true
        console.log('🚀 ~ conclusionForm: ', values)

        // await handleSubmit(onSubmit)(values)
    }

    const onSubmit = async (data, param = false) => {
        if (param.conclusion === true && param.status > 10) {
            console.log('🚀 ~ param.status:', param.status)
            data['status'] = param.status
            data['obsConclusao'] = param.obsConclusao
        }

        console.log('onSubmit: ', data)
        try {
            setSavingForm(true)
            if (type == 'edit') {
                await api
                    .put(`${staticUrl}/${id}`, {
                        data: data,
                        removedProducts: removedProducts,
                        unidadeID: loggedUnity.unidadeID
                    })
                    .then(response => {
                        toast.success(toastMessage.successUpdate)
                        setSavingForm(false)
                    })
            } else if (type == 'new') {
                await api
                    .post(`${staticUrl}/insertData`, {
                        data: data,
                        unidadeID: loggedUnity.unidadeID
                    })
                    .then(response => {
                        const newId = response.data
                        router.push(`${staticUrl}/${newId}`)
                        toast.success(toastMessage.successNew)
                        setSavingForm(false)
                    })
            } else {
                toast.error(toastMessage.error)
                setSavingForm(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('useEffect 1')
        setTitle('Recebimento de MP')
        getData()
    }, [savingForm])

    useEffect(() => {
        checkErrors()
    }, [])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Card Header */}
                    <Card>
                        <FormHeader
                            btnCancel
                            btnSave
                            btnSend
                            btnPrint
                            generateReport={generateReport}
                            dataReports={dataReports}
                            handleSubmit={() => handleSubmit(onSubmit)}
                            handleSend={handleSendForm}
                            title='Recebimento MP'
                            btnStatus
                            handleBtnStatus={() => setOpenModalStatus(true)}
                        />

                        {/* Header */}
                        <CardContent>
                            <Fields
                                register={register}
                                errors={errors}
                                setValue={setValue}
                                fields={fieldsState}
                                values={data}
                            />
                        </CardContent>
                    </Card>

                    {/* Produtos */}
                    <Card sx={{ mt: 4 }}>
                        <CardContent>
                            <Typography color='primary' variant='subtitle1' sx={{ fontWeight: 700, mb: 5 }}>
                                PRODUTOS
                            </Typography>
                            {fieldProducts &&
                                dataProducts &&
                                dataProducts.map((data, indexData) => (
                                    <Grid container spacing={4} key={indexData} sx={{ mb: 3 }}>
                                        {fieldProducts.map((field, indexField) => (
                                            <Grid item xs={12} md={12 / fieldProducts.length} key={indexField}>
                                                {/* Enviar hidden de recebimentompProdutoID */}
                                                <input
                                                    type='hidden'
                                                    name={`produtos[${indexData}].recebimentompProdutoID`}
                                                    defaultValue={data?.recebimentompProdutoID}
                                                    {...register(`produtos[${indexData}].recebimentompProdutoID`)}
                                                />

                                                {/* int (select) */}
                                                {field && field.tipo === 'int' && field.tabela && (
                                                    <FormControl fullWidth>
                                                        <Autocomplete
                                                            key={indexData} // Adicione a prop key com uma combinação única
                                                            options={field.options}
                                                            value={data?.[field.tabela]}
                                                            getOptionLabel={option => option.nome}
                                                            name={`produtos[${indexData}].${field.tabela}`}
                                                            {...register(`produtos[${indexData}].${field.tabela}`)}
                                                            onChange={(event, newValue) => {
                                                                setValue(
                                                                    `produtos[${indexData}].${field.tabela}`,
                                                                    newValue ? newValue : null
                                                                )
                                                            }}
                                                            renderInput={params => (
                                                                <TextField
                                                                    {...params}
                                                                    label={field.nomeCampo}
                                                                    placeholder={field.nomeCampo}
                                                                    error={
                                                                        errors?.produtos?.[indexData]?.[field.tabela]
                                                                            ? true
                                                                            : false
                                                                    }
                                                                />
                                                            )}
                                                        />
                                                    </FormControl>
                                                )}

                                                {/* Textfield */}
                                                {field && field.tipo === 'string' && (
                                                    <Box display='flex'>
                                                        <Box flexBasis='80%'>
                                                            <FormControl fullWidth>
                                                                <TextField
                                                                    defaultValue={data?.[field.nomeColuna]}
                                                                    label={field.nomeCampo}
                                                                    placeholder={field.nomeCampo}
                                                                    name={`produtos[${indexData}].${field.nomeColuna}`}
                                                                    aria-describedby='validation-schema-nome'
                                                                    error={
                                                                        errors?.produtos?.[indexData]?.[
                                                                            field.nomeColuna
                                                                        ]
                                                                            ? true
                                                                            : false
                                                                    }
                                                                    {...register(
                                                                        `produtos[${indexData}].${field.nomeColuna}`
                                                                    )}
                                                                    // Validações
                                                                    onChange={e => {
                                                                        field.nomeColuna === 'cnpj'
                                                                            ? (e.target.value = cnpjMask(
                                                                                  e.target.value
                                                                              ))
                                                                            : field.nomeColuna === 'cep'
                                                                            ? ((e.target.value = cepMask(
                                                                                  e.target.value
                                                                              )),
                                                                              getAddressByCep(e.target.value))
                                                                            : field.nomeColuna === 'telefone'
                                                                            ? (e.target.value = cellPhoneMask(
                                                                                  e.target.value
                                                                              ))
                                                                            : field.nomeColuna === 'estado'
                                                                            ? (e.target.value = ufMask(e.target.value))
                                                                            : (e.target.value = e.target.value)
                                                                    }}
                                                                    // inputProps com maxLength 18 se field.nomeColuna === 'cnpj'
                                                                    inputProps={
                                                                        // inputProps validando maxLength para cnpj, cep e telefone baseado no field.nomeColuna
                                                                        field.nomeColuna === 'cnpj'
                                                                            ? { maxLength: 18 }
                                                                            : field.nomeColuna === 'cep'
                                                                            ? { maxLength: 9 }
                                                                            : field.nomeColuna === 'telefone'
                                                                            ? { maxLength: 15 }
                                                                            : field.nomeColuna === 'estado'
                                                                            ? { maxLength: 2 }
                                                                            : {}
                                                                    }
                                                                />
                                                            </FormControl>
                                                        </Box>

                                                        {/* Botão Delete (insere botão na última coluna da linha) */}
                                                        {indexField == fieldProducts.length - 1 && (
                                                            <Box flexBasis='20%' textAlign='center'>
                                                                <Tooltip
                                                                    title={
                                                                        2 == 1
                                                                            ? `Este item não pode mais ser removido pois já foi respondido em um formulário`
                                                                            : `Remover este item`
                                                                    }
                                                                >
                                                                    <IconButton
                                                                        color='error'
                                                                        onClick={() => {
                                                                            2 === 1
                                                                                ? null
                                                                                : removeProduct(data, indexData)
                                                                        }}
                                                                        sx={{
                                                                            marginTop: 2,
                                                                            opacity: 2 === 1 ? 0.5 : 1,
                                                                            cursor: 2 === 1 ? 'default' : 'pointer'
                                                                        }}
                                                                    >
                                                                        <Icon icon='tabler:trash-filled' />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </Box>
                                                        )}
                                                    </Box>
                                                )}
                                            </Grid>
                                        ))}
                                    </Grid>
                                ))}

                            {/* Botão de adicionar produto */}
                            <Button
                                variant='outlined'
                                color='primary'
                                sx={{ mt: 1 }}
                                startIcon={<Icon icon='material-symbols:add-circle-outline-rounded' />}
                                onClick={() => {
                                    addProduct()
                                }}
                            >
                                Inserir produto
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Blocos */}
                    {blocos &&
                        blocos.map((bloco, index) => (
                            <Block
                                key={index}
                                index={index}
                                blockKey={`parRecebimentompBlocoID`}
                                values={bloco}
                                register={register}
                                setValue={setValue}
                                errors={errors}
                            />
                        ))}

                    {/* Observação do formulário */}
                    {info && (
                        <>
                            <Card sx={{ mt: 4 }}>
                                <CardContent>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={12}>
                                            <FormControl fullWidth>
                                                <Typography variant='subtitle1' sx={{ fontWeight: 600, mb: 2 }}>
                                                    Observações (campo de uso exclusivo da validadora)
                                                </Typography>
                                                <TextField
                                                    multiline
                                                    rows={4}
                                                    label='Observação (opcional)'
                                                    placeholder='Observação (opcional)'
                                                    defaultValue={info.obs ?? ''}
                                                    name='obs'
                                                    {...register('obs')}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </>
                    )}

                    {/* Dialog pra alterar status do formulário (se formulário estiver concluído e fábrica queira reabrir pro preenchimento do fornecedor) */}
                    {openModalStatus && (
                        <DialogFormStatus
                            id={id}
                            parFormularioID={1} // Fornecedor
                            formStatus={info.status}
                            hasFormPending={false} // hasFormPending
                            canChangeStatus={info.status > 30}
                            openModal={openModalStatus}
                            handleClose={() => setOpenModalStatus(false)}
                            title='Histórico do Formulário'
                            text={`Listagem do histórico das movimentações do formulário ${id} do Fornecedor.`}
                            btnCancel
                            btnConfirm
                            handleSubmit={changeFormStatus}
                        />
                    )}

                    {/* Dialog de confirmação de envio */}
                    <DialogFormConclusion
                        openModal={openModal}
                        handleClose={() => {
                            setOpenModal(false), setValidateForm(false)
                        }}
                        title='Concluir Formulário'
                        text={`Deseja realmente concluir este formulário?`}
                        info={info}
                        btnCancel
                        btnConfirm
                        btnConfirmColor='primary'
                        conclusionForm={conclusionForm}
                        listErrors={listErrors}
                    />
                </form>
            )}
        </>
    )
}

export default FormRecebimentoMp
