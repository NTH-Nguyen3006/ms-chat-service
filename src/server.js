import express from 'express'

const app = express()

const host = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, host, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
});