db.movies.find(
  { ratings: { $elemMatch: { $gte: 100, $lte: 105 } } }, 
  { _id: 0, title: 1, rating: 1 },
);
