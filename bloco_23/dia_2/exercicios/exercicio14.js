db.superheroes
  .find(
    {
      $or: [
        {'aspects.height': 180, publisher: 'Marvel Comics'}, 
        {'aspects.height': 200, publisher: 'Marvel Comics'}
      ]
    }
  );