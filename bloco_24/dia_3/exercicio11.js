db.movies.find(
  { ratings: { $size: 4 } },
  {
    _id: 0,
    title: 1,
  }
);
