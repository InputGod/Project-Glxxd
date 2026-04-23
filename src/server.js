const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Setup a joke generator endpoint
app.get('/joke', async (req, res) => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        const joke = response.data;
        res.json(joke);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});