# Calculadora Backend

Este é o backend da aplicação Calculadora Fullstack, desenvolvido com Node.js e Express.

## Visão Geral

Esta API REST fornece um endpoint para realizar cálculos simples:
1. Recebe um número do cliente através de uma requisição POST
2. Multiplica o número por 10
3. Retorna o resultado para o cliente

## Estrutura do Projeto

- `server.js`: Arquivo principal que contém a configuração do Express e a lógica da API
- `server.test.js`: Testes automatizados para a API
- `jest.config.js`: Configuração do framework de testes Jest
- `package.json`: Configuração de dependências e scripts

## Tecnologias Utilizadas

- Node.js
- Express 5.1.0
- CORS para permitir requisições cross-origin
- Jest para testes automatizados
- SuperTest para testes de integração

## API Endpoints

### POST /calculate

Multiplica o número fornecido por 10.

**Parâmetros de Requisição:**
- Body: JSON contendo a propriedade `number` (número a ser calculado)

**Exemplo de Requisição:**
```json
{
  "number": 5
}

**Resposta de Sucesso:** 
```json 
{
    "result": 50
}

**Resposta de Error:**
```json 
- Código: 400 Bad Request (número não fornecido)
{
  "error": "Número não fornecido"
}

- Código: 400 Bad Request (Número invalido)
{
  "error": "Número inválido"
}

## Testes
### Para executar os testes do backend: 

cd backend
npm test