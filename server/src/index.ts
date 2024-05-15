import express, { Express, Request, Response, Router } from "express";
import path from "path";
import cors from 'cors';

const app: Express = express();
const router = Router();

app.use(cors());

router.route('/convert')
    .post((req: Request, res: Response) => {
        const {celsiusTemperature, fahrenheitTemperature} = req.body;

        let newFahrenheitTemperature: number = celsiusTemperature ? (celsiusTemperature * 1.8) + 32 : 0;
        let newCelsiusTemperature: number = fahrenheitTemperature ? (fahrenheitTemperature - 32) / 1.8: 0;

        res.status(200).send({
            celsiusTemperature: newCelsiusTemperature,
            fahrenheitTemperature: newFahrenheitTemperature,
        });
    });

app.use(express.json());

app.use(router);
app.get('*', (req: Request, res: Response) => {
    res.status(200).sendFile(path.resolve('../client/index.html'));
})


const PORT: number = Number(process.env.SERVER_PORT);
app.listen(PORT ? PORT : 5000, () => {
    console.log('Servidor rodando na porta 5000');
});


