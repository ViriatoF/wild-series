import type { RequestHandler } from "express";
import categoryRepository from "./categoryRepository";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDb = await categoryRepository.readAll();
  res.json(categoriesFromDb);
};

const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);
  const category = categories.find((p) => p.id === parseId);
  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
