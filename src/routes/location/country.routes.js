import { Router } from "express";
import {
  allCountries,
  forSelectInput,
  byIdCountry,
  addCountry,
  actualizeCountry,
  disableCountry,
} from "../../controllers/country.controller.js";

const router = Router();

router.get("/all", allCountries);
router.get("/select", forSelectInput);
router.get("/:idCountry", byIdCountry);
router.post("/", addCountry);
router.put("/:idCountry", actualizeCountry);
router.delete("/:idCountry", disableCountry);

export default router;
