db.movies.find(
  { category: { $size: 2 } },
  {
    _id: 0,
    title: 1,
  }
);
