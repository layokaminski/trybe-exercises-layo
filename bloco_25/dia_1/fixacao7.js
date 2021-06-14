db.transactions.aggregate([
  {
    $group : {
      _id : "$bank",
      totalTransactions: { $sum: "$value" },
    }
  },
  {
    $match: {
      totalTransactions: { $gt: 1000 }
    }
  }
]);