db.movies.updateOne(
  { title: "Batman" },
  { $push: { ratings: { $each: [85, 100, 102, 105] } } },
);