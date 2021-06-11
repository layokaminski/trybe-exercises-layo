db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] },
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-03-31")
      },
    },
  },
  {
    $group: {
      _id: "$clienteId",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $match: { count: { $lt: 3 } },
  },
  {
    $count: "clientes"
  }
]);
