db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total: {
        $subtract: [
          "$sale_price",
          { $add: ["$purchase_price", "$taxes"] }

        ]
      }
    }
  }
]);
