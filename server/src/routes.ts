import { Express, Request, Response } from "express";
import reviewnotes from "./db/dummy-data-reviewnotes.json";
import users from "./db/dummy-data-users.json";

const routes = (app: Express) => {
  app.get("/reviewnotes", (_req: Request, res: Response) => {
    res.send(reviewnotes);
  });

  app.get("/users", (_req: Request, res: Response) => {
    res.send(users);
  });
};

export default routes;
