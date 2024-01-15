import db from "../../resources/db.json" assert { type: "json" };
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const promise = require('bluebird'); // or any other Promise/A+ compatible library;
const initOptions = {
  promiseLib: promise // overriding the default (ES6 Promise);
};
const pgp = require('pg-promise')(initOptions);
// See also: http://vitaly-t.github.io/pg-promise/module-pg-promise.html

// Database connection details;
const cn = {
  host: db.db.host, // 'localhost' is the default;
  port: db.db.port, // 5432 is the default;
  database: db.db.database,
  user: db.db.user,
  password: db.db.password,
  // to auto-exit on idle, without having to shut-down the pool;
  // see https://github.com/vitaly-t/pg-promise#library-de-initialization
  allowExitOnIdle: true
};
// You can check for all default values in:
// https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/defaults.js
const connDb = pgp(cn); // database instance;

Object.freeze(connDb);
export default connDb;