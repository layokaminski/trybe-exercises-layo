db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $addToSet: { "cast.$.actor": "Christian Bale" } 
});

db.movies.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  { $addToSet: { "cast.$.actor": "Michael Caine" } 
});

db.movies.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  { $addToSet: { "cast.$.actor": "Heath Ledger" } 
});
