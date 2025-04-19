const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { Client } = require("pg");

const firstSQL = `
    CREATE DATABASE messages;
`

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text VARCHAR ( 255 ),
  member VARCHAR ( 255 ),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, member, added) 
VALUES
  ('Hi there!', 'Amando', CURRENT_TIMESTAMP),
  ('Hello World!', 'Charles', CURRENT_TIMESTAMP),
  ('What''s up', 'Bill', CURRENT_TIMESTAMP),
  ('Nihao chingchong', 'Xuka', CURRENT_TIMESTAMP),
  ('Xin chao', 'Ying', CURRENT_TIMESTAMP);
`;

async function main() {
    console.log("seeding...");
    console.log(process.env.DB_URL)
    const client = new Client({
      connectionString: process.env.DB_URL,
    });
    await client.connect();
    await client.query(firstSQL);
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
main();