db.clientes.aggregate([
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: 1 }
    },
  },
  { $match: { _id: "SC" } },
]);
