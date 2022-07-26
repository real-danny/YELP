const { Pool } = require("pg");
require('dotenv')

// const pool = new Pool(
//   {
//     user: process.env.PGUSER,
//     host: process.env.PGHOTS,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT
//    }
// );
//

const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
