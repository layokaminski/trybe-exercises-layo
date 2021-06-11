db.clientes.aggregate([
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: 1 }
    },
  },
]);
