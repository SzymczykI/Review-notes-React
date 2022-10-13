import { Express, Request, Response } from "express";
import data from "./db/dummy-data-reviewnotes.json";

const routes = (app: Express) => {
  app.get("/all", (_req: Request, res: Response) => {
    res.send(data);
  });
};

export default routes;
