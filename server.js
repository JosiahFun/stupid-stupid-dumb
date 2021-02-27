const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send('<title>Thingy</title>running')
})

app.post('/payment/create', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    res.send(req.body)
});

const listener = app.listen(1033, () => {
    console.log("App listening on port " + listener.address().port);
})
