db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "history"
    },
  },
  {
    $limit: 4,
  }
]);