db.class.updateOne(
  { title: "Home Alone" }, 
  { $currentDate: { lastUpdated: { $type: "timestamp" } } },
);
