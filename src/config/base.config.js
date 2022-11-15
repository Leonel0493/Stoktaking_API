import { createPool } from "mysql2/promise";

// * Setting port for express
export const PORT = process.env.PORT || 4000;

// * Setting the configuration for Common Database
export const poolCommonDB = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@ndre4_2022*",
  database: "Common",
});
