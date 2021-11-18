db.voos.findOne(
  {
    $and: [
     { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lt: 600 } },
      { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    ],
  },
    { vooId: true, 
      _id: false,
     "empresa.nome": true,
     litrosCombustivel: true, 
    },
);
