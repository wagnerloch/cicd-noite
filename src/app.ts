import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Olá turma de Engenharia de Software 2!');
});

export default app;