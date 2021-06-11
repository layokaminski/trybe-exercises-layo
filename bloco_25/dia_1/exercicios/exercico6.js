db.clientes.aggregate([
  {
    $group: {
      _id: { uf: "$endereco.uf", sexo: "$sexo" },
      total: { $sum: 1 }
    },
  },
]);
