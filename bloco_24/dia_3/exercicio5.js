db.movies.updateOne(
  { title: "Home Alone" },
  { $push: { ratings: { $each: [200, 99, 65] } } },
);
