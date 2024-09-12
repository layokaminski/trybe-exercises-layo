db.class.updateOne(
  { title: "Batman" }, 
  { $rename: { budget: "estimatedBudget" } },
);
