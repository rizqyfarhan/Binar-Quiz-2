const express = require('express');
const app = express();

app.use(express.json());

const { Book } = require('./models');

app.get('/', async (_, res) => {
    const data = await Book.findOne({ where: { author: 'Simon Sinek' } });
    res.json(data);
});

app.listen(3000);