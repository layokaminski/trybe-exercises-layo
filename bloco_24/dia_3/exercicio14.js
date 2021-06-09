db.movies.find(
  {
    ratings: { $size: 4 },
    $or: [
      { category: { $all: ["adventure"] } },
      { category: { $all: ["family"] } }
    ],
    imdbRating: { $gt: 7 }
  }
);