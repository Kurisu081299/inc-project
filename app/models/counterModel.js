const dbConn = require("../config/db.config");

const PurokCounter = {};

PurokCounter.updateCounter = (purokNumber, callback) => {
  const columnName = `purok_${purokNumber}`;
  
  dbConn.query(
    `UPDATE purok_counter SET ${columnName} = ${columnName} + 1 WHERE id = 1`,
    (error, result) => {
      if (error) {
        console.error("Error updating purok counter: ", error);
        return callback(error, null);
      }
      console.log(`${columnName} counter updated successfully`);
      dbConn.query(
        `SELECT ${columnName} FROM purok_counter WHERE id = 1`,
        (selectError, selectResult) => {
          if (selectError) {
            console.error("Error fetching updated counter value: ", selectError);
            return callback(selectError, null);
          }
          const updatedValue = selectResult[0][columnName];
          return callback(null, { [columnName]: updatedValue });
        }
      );
    }
  );
};

PurokCounter.getAllCounts = (callback) => {
  dbConn.query(
    "SELECT * FROM purok_counter WHERE id = 1",
    (error, result) => {
      if (error) {
        console.error("Error fetching purok counts: ", error);
        return callback(error, null);
      }
      console.log("Purok counts fetched successfully");
      return callback(null, result[0]); // Return the first row as an object
    }
  );
};

module.exports = PurokCounter;
