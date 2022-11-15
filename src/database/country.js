import { poolCommonDB } from "../config/base.config.js";
import {
  selectAllCountries,
  selectCountryById,
  selectCountryForSelectInput,
  insertCountry,
  updateCountry,
  disableCountry,
} from "../sql/queries/country.queries.js";

// * request all countries to database
export const allCountries = async () => {
  const [result] = await poolCommonDB.query(selectAllCountries);

  return result;
};

// * request all countrie while enabled for select input
export const selectCountries = async () => {
  const [result] = await poolCommonDB.query(selectCountryForSelectInput);

  return result;
};

// * request country by idCountry while enabled
export const countriesById = async (idCountry) => {
  const [result] = await poolCommonDB.query(selectCountryById, [idCountry]);

  return result;
};
