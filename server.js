import express from "express";
import databaseConnection from "./config/db.js";
import apiRouter from "./routes/shopdataRoutes.js";
import bodyParser from "body-parser";


databaseConnection();
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`app is listning on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hi this is home page");
});

app.use("/api", apiRouter);
