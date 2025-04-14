# Calculadora Frontend

Este é o frontend da aplicação Calculadora Fullstack, desenvolvido com React e Vite.

## Visão Geral

Esta aplicação React fornece uma interface simples para uma calculadora que:
1. Permite aos usuários inserir um número
2. Envia o número para o servidor backend
3. Recebe o resultado do cálculo (número × 10)
4. Exibe o resultado para o usuário

## Estrutura do Projeto

- `src/`: Contém todo o código fonte React
  - `App.jsx`: Componente principal que gerencia a UI da calculadora e requisições API
  - `App.css`: Estilização para a interface da calculadora
  - `main.jsx`: Ponto de entrada que renderiza a aplicação React
  - `index.css`: Estilos globais
  - `assets/`: Contém imagens e outros recursos estáticos
- `public/`: Contém arquivos estáticos

## Tecnologias Utilizadas

- React 19
- Axios para requisições API
- Bootstrap para estilização
- React Bootstrap para componentes
- Vite como bundler e servidor de desenvolvimento

## Funcionalidades

- Interface amigável com estilização Bootstrap
- Validação de formulário para entradas numéricas
- Estado de carregamento durante chamadas à API
- Tratamento de erros para requisições com falha
- Design responsivo que funciona em dispositivos móveis

## Componentes Principais

### App.jsx

O componente principal que gerencia:
- Estados para o número de entrada, resultado, erro e carregamento
- Função de envio de formulário que envia o número para o backend
- Interface de usuário com Bootstrap

## Desenvolvimento
Para iniciar o servidor de desenvolvimento:
- npm install
- npm run dev
O servidor de desenvolvimento será iniciado em http://localhost:5173.

## Build para Produção
Para construir a aplicação para produção:
- npm run build
Isso gerará arquivos otimizados no diretório dist/.
