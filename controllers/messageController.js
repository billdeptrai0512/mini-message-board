// const db = require("../db/queries");
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

exports.AllMessageGet = (req, res) => {
    res.render('index', {messages: messages})
};

exports.AllMessagePost = (req, res) => {
    console.log(req.body)
};

exports.GetNewMessageForm = (req, res) => {
    res.render('form')
};

exports.PostNewMessage = (req, res) => {
    const newMessage = {
        text: req.body.message,
        user: req.body.user,
        added: new Date()
    }

    messages.push(newMessage)
    res.redirect('/')
};

exports.GetMessageIndex = (req, res) => {

    const index = req.params.messageIndex
    const message = messages[index]

    res.send(`${message.user} said ${message.text} at ${message.added}`)

};


