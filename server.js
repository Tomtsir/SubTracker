import express from "express";

const PORT = process.env.PORT || 3006;

const app = express();

app.get("/", (req, res, next) => {
  console.log("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
});
