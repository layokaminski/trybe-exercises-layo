db.superheroes
  .countDocuments({'aspects.hairColor': {$nin: ['Black', 'No Hair']}});