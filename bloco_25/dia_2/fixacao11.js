db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total_profit: {
          $divide: ["$sale_price", 2]
      }
    }
  }
]);
