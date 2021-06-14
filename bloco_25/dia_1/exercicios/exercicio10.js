db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $match: { count: { $gt: 5 } },
  },
  {
    $count: "clientes"
  }
]);
