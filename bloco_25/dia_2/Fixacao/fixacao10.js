db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total_profit: {
        $multiply: [
          {
            $subtract: [
              "$sale_price",
              { $add: ["$taxes", "$purchase_price"] }
            ]
          },
          "$quantity"
        ]
      }
    }
  }
]);
