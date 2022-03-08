const express = require('express')
const app = express()
const port = 3001
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/login', function(req, res) {
    var name = "Jelani";
    res.cookie('some_name', name);
    res.send(name);
    res.end();
})

app.get('/hello', (req, res) => {
    var name = req.cookies['some_name'];
    console.log(name);
    res.send(`Welcome ${name}!`);
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))