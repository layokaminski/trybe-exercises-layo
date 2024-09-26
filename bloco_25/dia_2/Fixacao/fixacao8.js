db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total: {
        $abs: {
          $subtract: [
            { $add: ["$purchase_price", "$taxes"] },
            "$sale_price"
          ]
        }
      }
    }
  }
]);
