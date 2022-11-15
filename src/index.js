import express from "express";
import cors from "cors";
import { PORT } from "./config/base.config.js";
import countryRoutes from "./routes/location/country.routes.js";

const app = express();

// * Setting express configuration
app.use(cors());
app.use(express.json());

// * Add routes for API
app.use("/api/v1/location/country", countryRoutes);

// * Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
