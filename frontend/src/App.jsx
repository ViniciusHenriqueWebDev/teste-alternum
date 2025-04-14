import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  //declaração das variaveis de estado
  const [number, setNumber] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  //criação da função handleSubmit que irá lidar com o evento de submit do formulário e enviará para o servidor o número digitado
  //a função irá fazer uma requisição para o servidor e receber o resultado do cálculo
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!number.trim()) return

    setLoading(true)
    
    try {
      const response = await axios.post('http://localhost:3000/calculate', { number: parseInt(number) })
      setResult(response.data.result)
      setError('')
    } catch (error) {
      console.error('Erro:', error)
      setResult(null)
      setError('Erro ao processar o cálculo')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 calculator-container">
      <div className="card shadow-lg" style={{ width: '400px', maxWidth: '90%' }}>
        <div className="card-header bg-primary text-white text-center py-3">
          <h4 className="mb-0">Calculadora</h4>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="numberInput" className="form-label">Digite um número:</label>
              <input
                type="number"
                className="form-control form-control-lg"
                id="numberInput"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Ex: 42"
                disabled={loading}
              />
            </div>
            <div className="d-grid">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg" 
                disabled={loading}
              >
                {loading ? 'Calculando...' : 'Calcular (× 10)'}
              </button>
            </div>
          </form>

          {result !== null && (
            <div className="mt-4 alert alert-success">
              <strong>Resultado:</strong> {result}
            </div>
          )}

          {error && (
            <div className="mt-4 alert alert-danger">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App