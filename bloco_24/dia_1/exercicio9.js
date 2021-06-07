db.class.updateOne(
  { title: "Godzilla" }, 
  { 
    $max: { imdbRating: 8.6 }, 
    $set: { "category.1": "adventure" },
  }
);
