db.movies.find(
  { ratings: { $elemMatch: { $gte: 64, $lte: 105 },
  $mod: [9, 0] } },
  { _id: 0, title: 1, rating: 1 },
);
