const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    res.send({ express: "HELLO FROM EXPRESS" });
});

app.listen(port, () => console.log(`LISTENING ON PORT: ${ port }`));