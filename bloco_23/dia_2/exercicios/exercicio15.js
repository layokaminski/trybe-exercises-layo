db.superheroes.find(
  {$and: [
    {'aspects.weight': {$gte: 80, $lte: 100}}, 
    {$or: [{race: 'Human'}, {race: 'Mutants'}]}, 
    {publisher: {$ne: 'DC Comics'}}
  ]});