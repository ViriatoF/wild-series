import type { RequestHandler } from "express";

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

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((category) =>
      category.name.includes(req.query.q as string),
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
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
