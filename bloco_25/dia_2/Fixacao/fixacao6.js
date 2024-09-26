db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      flooredValue: {
        $floor: "$sale_price"
      }
    }
  }
]);
