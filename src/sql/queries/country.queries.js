// * Export the queries will be used on database request

export const selectAllCountries = "SELECT * FROM Countries WHERE Enabled = 1";

export const selectCountryForSelectInput =
  "SELECT 0 as idCountry, ' Select Country ...' as Country UNION SELECT idCountry, Country FROM Countries WHERE Enabled = 1 ORDER BY Country ASC";

export const selectCountryById =
  "SELECT * FROM Countries WHERE idCountry = ? AND Enabled = 1";

export const insertCountry =
  "INSERT INTO Countries(Country, PhoneCode, Flag, CreatedBy) VALUES(?,?,?,?)";

export const updateCountry =
  "UPDATE Countries SET Country = ?, PhoneCode = ?, Flag = ?, ModifiedBy = ? WHERE idCountry = ? AND Enabled = 1";

export const disableCountry =
  "UPDATE Countries SET Enabled = 0 WHERE idCountry = ?";
