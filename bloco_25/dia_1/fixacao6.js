db.transactions.aggregate([
  {
    $group : {
      _id : null,
      totalTransactions: { $sum: "$value" },
    }
  }
]);
