db.transactions.aggregate([
  {
    $group : {
      _id : "$bank",
      totalTransactions: { $sum: "$value" },
      count: { $sum: 1}
    }
  }
]);
