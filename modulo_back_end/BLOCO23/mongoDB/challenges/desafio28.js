const LATAM = "LATAM AIRLINES BRASIL";

db.voos.count(
  {
    "empresa.nome": LATAM,
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  {
    empresa: LATAM,
    totalVoosDomesticos: 20026,
  },
);

db.resumoVoos.findOne(
  {
    empresa: LATAM,
  },
  {
    empresa: true,
    totalVoosDomesticos: true,
    _id: false,
  },
);
