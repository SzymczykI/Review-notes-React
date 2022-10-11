import express from "express";
import config from "config";
import cors from "cors";

const port = config.get<number>("port");

const app = express();

app.use(
  cors({
    origin: config.get("origin"),
    credentials: true,
  })
);

app.use(express.json());

app.listen(port, async () => {
  console.log(`app is running at http://localhost${port}`);
});
