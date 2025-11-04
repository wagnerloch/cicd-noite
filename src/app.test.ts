import request from 'supertest';
import app from './app';

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Olá turma de Engenharia de Software 2! Tudo bem com vocês?');
  });
});