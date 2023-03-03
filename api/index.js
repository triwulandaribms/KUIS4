import express from "express";

const app = express();

app.get("/api/salam", (_req, res) => {
  res.send("Assalamualaikum warahmatulahi wabarakatuh");
});

app.listen(3000, () => {
  console.log("sedang berjalan");
});
