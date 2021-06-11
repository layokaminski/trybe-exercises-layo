db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "history"
    },
  },
  {
    $limit: 4,
  }
]);