const express = require("express");
const app = express();
const port = 3000;
const books = [
  {
    id: 1,
    title: "Book A",
    author: "Author A",
  },
  {
    id: 2,
    title: "Book B",
    author: "Author B",
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json(books);
});

app.post("/", (req, res) => {
  books.push(req.body);
  res.status(201).json(books);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
