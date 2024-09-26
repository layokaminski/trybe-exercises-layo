db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      totalVendas: {
        $floor: {
          $multiply: ["$sale_price", "$quantity"]
        }
      }
    }
  }
]);
