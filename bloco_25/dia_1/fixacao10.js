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
    $match: { State: "Florida" },
  }
]);
