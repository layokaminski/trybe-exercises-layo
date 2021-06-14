db.transactions.aggregate([
  {
    $match: {
      $or: [
        { value: { $gt: 700, $lt: 6000 }},
        { to: 'Lisa Simpson' },
      ]
    }
  },
]);