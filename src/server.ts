import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";


export const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", protect,router);
