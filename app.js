const express = require('express')
const path = require("node:path");

const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
///

const messages = [
    {   
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "What's up",
        user: "Bill",
        added: new Date()
    },
    {
        text: "Nihao chingchong",
        user: "Xuka",
        added: new Date()
    },
    {
        text: "Xin chao",
        user: "Ying",
        added: new Date()
    },
];

app.get('/', (req, res) => {
    res.render('index', {messages: messages})
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.get('/new', (req, res) => {
    res.render('form')
})

app.post('/new', (req, res) => {

    const newMessage = {
        text: req.body.message,
        user: req.body.user,
        added: new Date()
    }

    messages.push(newMessage)
    res.redirect('/')
})

app.get('/message/:messageIndex', (req, res) => {

    const index = req.params.messageIndex
    const message = messages[index]

    res.send(`${message.user} said ${message.text} at ${message.added}`)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`mini message board is on ${PORT}!`);
});
