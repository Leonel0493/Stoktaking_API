// * Export the queries will be used on database request

export const selectAllCountriesQuery =
  "SELECT * FROM Countries WHERE Enabled = 1";

export const selectCountryForSelectInputQuery =
  "SELECT 0 as idCountry, ' Select Country ...' as Country UNION SELECT idCountry, Country FROM Countries WHERE Enabled = 1 ORDER BY Country ASC";

export const selectCountryByIdQuery =
  "SELECT * FROM Countries WHERE idCountry = ? AND Enabled = 1";

export const insertCountryQuery =
  "INSERT INTO Countries(Country, PhoneCode, Flag, CreatedBy) VALUES(?,?,?,?)";

export const updateCountryQuery =
  "UPDATE Countries SET Country = ?, PhoneCode = ?, Flag = ?, ModifiedBy = ? WHERE idCountry = ? AND Enabled = 1";

export const disableCountryQuery =
  "UPDATE Countries SET Enabled = 0, ModifiedBy = ? WHERE idCountry = ?";
