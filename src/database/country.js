import { poolCommonDB } from "../config/base.config.js";
import {
  selectAllCountriesQuery,
  selectCountryForSelectInputQuery,
  selectCountryByIdQuery,
  insertCountryQuery,
  updateCountryQuery,
  disableCountryQuery,
} from "../sql/queries/country.queries.js";

// * request all countries to database
export const countriesAll = async () => {
  const [result] = await poolCommonDB.query(selectAllCountriesQuery);

  return result;
};

// * request all countrie while enabled for select input
export const countriesForSelectInput = async () => {
  const [result] = await poolCommonDB.query(selectCountryForSelectInputQuery);

  return result;
};

// * request country by idCountry while enabled
export const countriesById = async (idCountry) => {
  const [result] = await poolCommonDB.query(selectCountryByIdQuery, [
    idCountry,
  ]);

  return result;
};

/*
 * Run insert query in order to add new country in data base
 * @parm request.body bodyReq
 */
export const countryAdd = async (bodyReq) => {
  const { country, phoneCode, flag, createdBy } = bodyReq;

  const [result] = await poolCommonDB.query(insertCountryQuery, [
    country,
    phoneCode,
    flag,
    createdBy,
  ]);

  return result;
};

/*
 * Run update query in oder to replace one o multiple information about country
 * @param request.body bodyReq
 * @param request.params.idCountry idCountry
 */
export const countryUpdate = async (bodyReq, idCountry) => {
  const { country, phoneCode, flag, modifiedBy } = bodyReq;

  const [result] = await poolCommonDB.query(updateCountryQuery, [
    country,
    phoneCode,
    flag,
    modifiedBy,
    idCountry,
  ]);

  return result;
};

/*
 * Run query for disable country
 * @param request.params.idCountry idCountry
 */
export const countryDisable = async (modifiedBy, idCountry) => {
  const [result] = await poolCommonDB.query(disableCountryQuery, [
    modifiedBy,
    idCountry,
  ]);

  return result;
};
