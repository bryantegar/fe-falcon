const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('Ini fe-falcon');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log('Server listening on port ${PORT}...');
});
