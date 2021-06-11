db.clientes.aggregate([
  {
    $group: {
      _id: { uf: "$endereco.uf", sexo: "$sexo" },
      total: { $sum: 1 }
    },
  },
  {
    $project: {
      _id: 0,
      estado: "$_id.uf",
      sexo: "$_id.sexo",
      total: 1
    }
  }
]);
