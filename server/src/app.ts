import express from "express";
import config from "config";
import cors from "cors";
import routes from "./routes";


const port = config.get<number>("port");

const app = express();

app.use(
  cors({
    origin: config.get("origin"),
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, async () => {
  console.log(`app is running at http://localhost:${port}`);

  routes(app);
});
