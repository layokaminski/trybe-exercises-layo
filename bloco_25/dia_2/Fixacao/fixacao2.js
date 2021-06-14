db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "transactions"
    }
  },
  {
    $limit: 4,
  }
]);
