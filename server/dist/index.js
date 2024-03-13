"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('*', (req, res) => {
    res.status(200).sendFile(path_1.default.resolve('../../client/index.html'));
});
const PORT = Number(process.env.SERVER_PORT);
app.listen(PORT ? PORT : 5000, () => {
    console.log('Servidor rodando na porta 5000');
});
//# sourceMappingURL=index.js.map