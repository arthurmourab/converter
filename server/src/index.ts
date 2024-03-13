import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();

app.use(express.json());

app.get('*', (req: Request, res: Response) => {
    res.status(200).sendFile(path.resolve('../../client/index.html'));
})


const PORT: number = Number(process.env.SERVER_PORT);
app.listen(PORT ? PORT : 5000, () => {
    console.log('Servidor rodando na porta 5000');
});


