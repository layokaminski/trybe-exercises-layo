db.movies.updateOne(
  { title: "Home Alone" }, 
  { $addToSet: { cast: { 
    $each: [
    {
      "actor": "Macaulay Culkin",
      "character": "Kevin"
    },
    {
      "actor": "Joe Pesci",
      "character": "Harry"
    },
    {
      "actor": "Daniel Stern"
    }
    ]}}
  },
);
