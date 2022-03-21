db.voos.findOne(
  {
    $and: [
     { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lt: 1000 } },
    ],
  },
    { vooId: true, litrosCombustivel: true, _id: false },
);
