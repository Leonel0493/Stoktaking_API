// * Exporting queries for manage Cities table

export const selectCities = "SELECT * FROM Cities WHERE Enabled = 1";

export const selectCitiesByProvince =
  "SELECT * FROM Cities WHERE idProvinces = ? AND Enabled = 1";

export const selectCitiesForSelectInput =
  "SELECT 0 as idCity, ' Select city ...' as City UNION SELECT idCity, City FROM Cities WHERE Enabled = 1";

export const selectCity =
  "SELECT * FROM Cities WHERE idCity = ? AND Enabled = 1";

export const insertCity =
  "INSERT INTO Cities(City, idProvince, CreatedBy) VALUES(?, ?, ?)";

export const updateCity =
  "UPDATE Cities SET City = ?, idProvince = ?, ModifiedBy = ? WHERE idCity = ? AND Enabled = 1";

export const disableCity =
  "UPDATE Cities SET Enabled = 0, ModifiedBy = ? WHERE idCity = ?";
