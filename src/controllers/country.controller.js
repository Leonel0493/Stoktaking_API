import { getAllCountries } from "../services/country.service.js";

export const AllCountries = async (req, res) => {
  try {
    const data = await getAllCountries();

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
