import {
  allCountries,
  selectCountries,
  countriesById,
} from "../database/country.js";

export const getAllCountries = async () => {
  const result = await allCountries();

  return result;
};
