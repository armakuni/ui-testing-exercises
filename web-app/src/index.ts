import express from 'express';
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', [path.join(__dirname, 'templates')])

app.get('/', (req, res) => {
    res.render('index', { name: "World"})
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})
