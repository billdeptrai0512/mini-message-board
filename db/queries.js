const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertNewMessage(message) {
  await pool.query("INSERT INTO messages (text, member, added) VALUES ($1, $2, $3)", [message.text, message.member, message.added]);
}

async function findMessage(id) {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ($1)`, [id])
    return rows[0]
}

async function deleteMessage(id) {
    await pool.query('DELETE FROM messages WHERE id = ($1)', [id])
}

async function deleteAllMessage(id) {
    await pool.query('DELETE FROM messages')
}

module.exports = {
    getAllMessages,
    insertNewMessage,
    findMessage,
    deleteMessage,
    deleteAllMessage
};