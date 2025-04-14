process.env.NODE_ENV = 'test'; // Definindo ambiente de teste explicitamente

const request = require('supertest');
const app = require('./server');

describe('API de Cálculo', () => {

  test('POST /calculate deve multiplicar o número por 10 corretamente', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ number: 5 });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('result');
    expect(response.body.result).toBe(50);
  });

  test('POST /calculate deve retornar erro quando número não é fornecido', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({});
    
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Número não fornecido');
  });

});