db.products.aggregate([
  {
    $addFields: {
      total_storage: {
        $multiply: ["$sale_price", "$quantity"]
      }
    }
  }
]);
