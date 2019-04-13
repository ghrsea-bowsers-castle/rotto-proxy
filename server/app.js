const express = require('express');

const app = express();

const port = 3004;

app.use("/:id", express.static(__dirname +"./../public"));

// app.get('/', (req, res) => {
//     res.send("It's aliiiiiiiiiiiiiive");
// })

app.listen(port, () => console.log(`proxy is listening on port ${port}`));