const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Jenkins CI/CD pipeline!');
});

app.get('/feature_A', (req, res) => {
    res.send('Hello from staging!!!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
