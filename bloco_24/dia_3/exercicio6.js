db.movies.find(
  { ratings: { $elemMatch: { $gt: 103 } } }, 
  { _id: 0, title: 1, rating: 1 },
);
