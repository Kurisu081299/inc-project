const PurokCounterModel = require("../models/counterModel");

exports.count = function (req, res) {
  let purokNumber = parseInt(req.query.purok) || 1; // Default to 1 if not provided
  
  // Ensure purokNumber is between 1 and 6
  purokNumber = Math.min(Math.max(purokNumber, 1), 6);

  console.log("Purok number in controller:", purokNumber);

  PurokCounterModel.updateCounter(purokNumber, (error, result) => {
    if (error) {
      console.error("Error updating purok counter: ", error);
      return res.status(500).json({
        error: "Internal Server Error",
        message: "Error updating purok counter",
      });
    }
    console.log("Purok counter updated successfully");
    return res.status(200).json({
      message: "Purok counter updated successfully",
      data: result,
    });
  });
};
