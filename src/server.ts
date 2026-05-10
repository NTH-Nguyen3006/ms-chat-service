import express from 'express'
import { connectDB } from './libs/db';
import { PORT } from './libs/env';

const app = express()

const host = process.env.HOST || 'localhost'
// const PORT = Number(process.env.PORT) || 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://${host}:${PORT}`);
    });
})
