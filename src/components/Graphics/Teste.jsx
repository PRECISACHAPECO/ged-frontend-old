import React from 'react'
import axios from 'axios'
import { api } from 'src/configs/api'

const App = () => {
    const handleGerarRelatorio = () => {
        api.get('/gerar-relatorio', {
            responseType: 'blob' // Define o tipo de resposta como um blob (arquivo)
        })
            .then(response => {
                const file = new Blob([response.data], { type: 'application/pdf' })
                const fileURL = URL.createObjectURL(file)
                window.open(fileURL) // Abre o arquivo em uma nova guia
            })
            .catch(error => {
                console.error('Erro ao gerar relatório:', error)
            })
    }

    return (
        <div>
            <button onClick={handleGerarRelatorio}>Gerar Relatório</button>
        </div>
    )
}

export default App
