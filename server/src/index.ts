import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();

app.use(express.json());

app.get('*', (req: Request, res: Response) => {
    res.status(200).sendFile(path.resolve('index.html'));
})

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});


