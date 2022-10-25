import { Express, Request, Response } from "express";
import reviewnotes from "./db/dummy-data-reviewnotes.json";
import users from "./db/dummy-data-users.json";
import { getReviewnotesHandler } from './controller/reviewnote.controller'

const routes = (app: Express) => {
  app.get("/reviewnotes", getReviewnotesHandler);

  app.get("/users", (_req: Request, res: Response) => {
    res.send(users);
  });
};

export default routes;
