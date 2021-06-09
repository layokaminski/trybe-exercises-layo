db.movies.updateOne({ title: "Batman" }, { $pop: { category: -1 } });

// No gabarito:

db.movies.updateOne(
  { title: "Batman" },
  {
    $pull: { category: "action" },
  },
);
