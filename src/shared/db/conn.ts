import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost", // process.env.DB_HOST
  user: "root", // process.env.DB_USER
  password: "1234", // process.env.DB_PASSWORD
  database: "servicioCuotasDB", // process.env.DB_NAME
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// Cuando use Docker, uso process.env
