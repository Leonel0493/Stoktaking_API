import {
  countriesAll,
  countriesForSelectInput,
  countriesById,
  countryAdd,
  countryUpdate,
  countryDisable,
} from "../database/country.js";

export const getCountries = async () => {
  const result = await countriesAll();

  return result;
};

export const getCountriesSelectInput = async () => {
  const result = await countriesForSelectInput();

  return result;
};

export const getCountry = async (idCountry) => {
  const result = await countriesById(idCountry);

  if (result.length === 0) return 404;

  return result[0];
};

export const postCountry = async (bodyRequest) => {
  const result = await countryAdd(bodyRequest);

  if (result.affectedRows === 0) return 404;

  const { country, phoneCode, flag, createdBy } = bodyRequest;

  const json = {
    idCountry: result.insertId,
    Country: country,
    PhoneCode: phoneCode,
    Flag: flag,
    CreatedBy: createdBy,
    Enabled: true,
  };

  return json;
};

export const putCountry = async (bodyRequest, idCountry) => {
  const result = await countryUpdate(bodyRequest, idCountry);

  if (result.affectedRows === 0) return 404;

  const { country, phoneCode, flag, modifiedBy } = bodyRequest;

  const json = {
    idCountry,
    Country: country,
    PhoneCode: phoneCode,
    Flag: flag,
    ModifiedBy: modifiedBy,
    Enabled: true,
  };

  return json;
};

export const deleteCountry = async (idCountry, bodyRequest) => {
  const { modifiedBy } = bodyRequest;
  const result = await countryDisable(modifiedBy, idCountry);

  if (result.affectedRows === 0) return 404;

  const json = {
    idCountry,
    ModifiedBy: modifiedBy,
    Enabled: false,
  };

  return json;
};
