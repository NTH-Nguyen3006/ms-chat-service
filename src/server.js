import express from 'express'
import { connectDB } from './libs/db.js';

const app = express()

const host = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

connectDB().then(() => {
    app.listen(PORT, host, () => {
        console.log(`Server is running on http://${host}:${PORT}`);
    });
})
