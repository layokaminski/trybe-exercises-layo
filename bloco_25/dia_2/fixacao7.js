db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      ceiledValue: {
        $ceil: "$sale_price"
      }
    }
  }
]);
