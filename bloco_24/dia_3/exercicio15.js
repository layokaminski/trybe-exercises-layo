db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    }
  }
);
