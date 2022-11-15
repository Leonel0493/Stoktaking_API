import { Router } from "express";
import { AllCountries } from "../../controllers/country.controller.js";

const router = Router();

router.get("/all", AllCountries);

export default router;
