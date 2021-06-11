db.transactions.aggregate(
  [
    {
      $project: { _id: 0, bank: 1 }
    }
  ]
);
