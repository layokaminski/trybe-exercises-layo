db.restaurants
  .find({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } })
  .count();