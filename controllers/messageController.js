const db = require("../db/queries");

exports.AllMessageGet = async (req, res) => {
    const messages = await db.getAllMessages()
    res.render('index', {messages: messages})
};

exports.AllMessagePost = (req, res) => {
    console.log(req.body)
};

exports.GetNewMessageForm = (req, res) => {
    res.render('form')
};

exports.PostNewMessage = async (req, res) => {
    const newMessage = {
        text: req.body.message,
        member: req.body.member,
        added: new Date().toDateString()
    }

    await db.insertNewMessage(newMessage)

    res.redirect('/')
};

exports.FindMessageID = async(req, res) => {

    const id = req.query.id

    const message = await db.findMessage(id)

    res.send(`${message.member} said ${message.text} at ${message.added}`)

};

exports.GetMessageID = async(req, res) => {

    const id = req.params.id

    const message = await db.findMessage(id)

    res.render('message', {message: message})

};

exports.DeleteMessageID = async(req, res) => {

    const id = req.params.id

    await db.deleteMessage(id)

    res.redirect('/')

};

exports.DeleteAllMessage = async(req, res) => {

    await db.deleteAllMessage()

    res.redirect('/')

};


