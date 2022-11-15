import {
  getCountries,
  getCountriesSelectInput,
  getCountry,
  postCountry,
  putCountry,
  deleteCountry,
} from "../services/country.service.js";

import {
  GetNotFound,
  PostNotFound,
  PutNotFound,
  DeleteNotFound,
} from "../helpers/NotFoundMessages.js";

// * Endpoint for get all countries
export const allCountries = async (req, res) => {
  try {
    const data = await getCountries();

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// * Enpoint for get all countries for select
export const forSelectInput = async (req, res) => {
  try {
    const data = await getCountriesSelectInput();

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// * Endpoint for get country by id
export const byIdCountry = async (req, res) => {
  try {
    const data = await getCountry(req.params.idCountry);

    if (data === 404) return res.status(404).send(GetNotFound);

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// * Endpoint for post data in country table
export const addCountry = async (req, res) => {
  try {
    const data = await postCountry(req.body);

    if (data === 404) return res.status(404).send(PostNotFound);

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// * Enpoint for put data in country table
export const actualizeCountry = async (req, res) => {
  try {
    const data = await putCountry(req.body, req.params.idCountry);

    if (data === 404) return res.status(404).send(PutNotFound);

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// * Enpoint for delete request
export const disableCountry = async (req, res) => {
  try {
    const data = await deleteCountry(req.params.idCountry, req.body);

    if (data === 404) return res.status(404).send(DeleteNotFound);

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
