import { useEffect, useState, useContext } from 'react'
import { api } from 'src/configs/api'
import TableFilter from 'src/views/table/data-grid/TableFilter'
import { CardContent } from '@mui/material'
import { FormatContext } from 'src/context/FormatContext'

import Loading from 'src/components/Loading'

// ** Next
import { useRouter } from 'next/router'

// ** Configs
import { configColumns } from 'src/configs/defaultConfigs'
import { Card } from '@mui/material'

// import axios from 'axios'

const Item = () => {
    const [result, setResult] = useState(null)
    const router = useRouter()
    const currentLink = router.pathname
    const { setTitle } = useContext(FormatContext)

    useEffect(() => {
        const getList = async () => {
            await api.get(currentLink).then(response => {
                setResult(response.data)
                setTitle('Item')
            })
        }
        getList()
    }, [])

    const arrColumns = [
        {
            title: 'ID',
            field: 'id',
            size: 0.1
        },
        {
            title: 'Nome',
            field: 'nome',
            size: 0.8
        },
        {
            title: 'Status',
            field: 'status',
            size: 0.1
        }
    ]

    const columns = configColumns(currentLink, arrColumns)

    return (
        <>
            {!result && <Loading />}
            {result && (
                <>
                    <Card>
                        <CardContent sx={{ pt: '0' }}>
                            <TableFilter
                                rows={result}
                                columns={columns}
                                buttonsHeader={{
                                    btnNew: true,
                                    btnPrint: true
                                }}
                            />
                        </CardContent>
                    </Card>
                </>
            )}
        </>
    )
}

export default Item