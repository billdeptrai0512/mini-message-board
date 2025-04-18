const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/", messageController.AllMessageGet);
messageRouter.post("/", messageController.AllMessagePost);
messageRouter.get("/new", messageController.GetNewMessageForm);
messageRouter.post("/new", messageController.PostNewMessage);
messageRouter.get("/message", messageController.FindMessageID);
messageRouter.get("/message/:id", messageController.GetMessageID);
messageRouter.get("/delete/:id", messageController.DeleteMessageID);
messageRouter.get("/delete-all", messageController.DeleteAllMessage);
module.exports = messageRouter;