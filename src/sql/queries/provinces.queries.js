// * Export queries for Provinces

export const selectProvincesQuery = "SELECT * FROM Provices WHERE Enabled = 1";

export const selectProvincesByCountryQuery =
  "SELECT * FROM Provinces WHERE idCountry = ? AND Enabled = 1";

export const selectProvince =
  "SELECT * FROM Provinces WHERE idProvince = ? AND Enabled = 1";

export const insertProvinceQuery =
  "INSERT INTO Provinces(Province, idCountry, CreatedBy) VALUES (?, ?, ?)";

export const updateProvincesQuery =
  "UPDATE Provinces SET Province = ?, idCountry = ?, ModifiedBy = ? WHERE idProvince = ? AND Enabled = 1";

export const disableProvinceQuery =
  "UPDATE Pronvinces SET ModifiedBy = ?, Enabled = 0 WHERE idProvince = ?";
