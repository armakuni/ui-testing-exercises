import express from 'express';
import * as path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', [path.join(__dirname, 'templates')])

function oneOf<T>(...options: T[]): T {
  return options[Math.floor(Math.random() * options.length)]
}

function shuffle<T>(array: T[]): T[] {
  return array.sort(() => (Math.random() > 0.5) ? 1 : -1)
}

app.get('/', (req, res) => {
    res.render('index', { name: "World"})
})

app.get('/exercise1', (req, res) => {
  const template = oneOf('exercise1/page1a', 'exercise1/page1b')
  res.render(template)
})

app.post('/exercise1', (req, res) => {
  res.render('exercise1/page2')
})

app.get('/exercise2', (req, res) => {
  res.render('exercise2/page1')
})

app.get('/exercise2/logged-in', (req, res) => {
  res.render('exercise2/page2')
})

app.get('/exercise3', (req, res) => {
  const users = [
    {username: "alice", permissions: "admin"},
    {username: "bob", permissions: "admin"},
    {username: "carol", permissions: "user"},
  ];
  shuffle(users)
  res.render('exercise3/page', {users})
})

app.get('/exercise4', (req, res) => {
  res.render('exercise4/page')
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})
