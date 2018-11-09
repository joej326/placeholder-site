
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/placeholder-site'));

const port = 3019;


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
     