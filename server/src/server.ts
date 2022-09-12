import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Samuel " },
    { id: 2, name: "Samuel " },
    { id: 3, name: "Samuel " },
    { id: 4, name: "Samuel " },
  ]);
});

app.listen(3333);
