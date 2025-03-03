const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/about', (req, res) => {
    res.send('Welcome about');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
