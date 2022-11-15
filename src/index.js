import express from "express";
import cors from "cors";
import { PORT } from "./config/base.config.js";

const app = express();

// * Setting express configuration
app.use(cors());
app.use(express.json());

// * Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
