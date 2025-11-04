import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Olá turma de Engenharia de Software 2! Tudo bem com vocês?');
});

export default app;