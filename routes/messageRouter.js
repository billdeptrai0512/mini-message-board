const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/", messageController.AllMessageGet);
messageRouter.post("/", messageController.AllMessagePost);
messageRouter.get("/new", messageController.GetNewMessageForm);
messageRouter.post("/new", messageController.PostNewMessage);
messageRouter.get("/message/:messageIndex", messageController.GetMessageIndex);

module.exports = messageRouter;