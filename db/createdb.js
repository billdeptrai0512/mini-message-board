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
    const client = new Client({
      connectionString: "postgres://billdeptrai0512:npg_PrGkWt5i4aKS@ep-bitter-surf-a1z5j8j7.ap-southeast-1.pg.koyeb.app/koyebdb",
    });
    await client.connect();
    await client.query(firstSQL);
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
main();