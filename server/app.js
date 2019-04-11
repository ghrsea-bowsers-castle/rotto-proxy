const express = require('express');

const app = express();

const port = 3032;

app.use("/", express.static("./../public"));

// app.get('/', (req, res) => {
//     res.send("It's aliiiiiiiiiiiiiive");
// })

app.listen(port, () => console.log(`proxy is listening on port ${port}`));