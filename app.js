require('dotenv').config()
const express = require('express')
const path = require("node:path");
const messageRouter = require("./routes/messageRouter");

const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", messageRouter);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`mini message board is on ${PORT}!`);
});
