import { Express, Request, Response } from "express";
import reviewnotes from "./db/dummy-data-reviewnotes.json";
import users from "./db/dummy-data-users.json";

const routes = (app: Express) => {
  app.get("/reviewnotes", (req: Request, res: Response) => {
    const limit = req.query.limit;
    let result = reviewnotes;
    if (req.query.type) {
      const filter = req.query.type;
      console.log(limit);
      const filtered =
        result !== reviewnotes
          ? result.filter((type) => type.type === filter)
          : reviewnotes.filter((type) => type.type === filter);
      result = filtered;
    }
    if (req.query.section) {
      const filter = req.query.section;
      const filtered =
        result !== reviewnotes
          ? result.filter((type) => type.sectionRef === filter)
          : reviewnotes.filter((type) => type.sectionRef === filter);
      result = filtered;
    }
    if (req.query.priority) {
      const filter = req.query.priority;
      const filtered =
        result !== reviewnotes
          ? result.filter((type) => type.priority.text === filter)
          : reviewnotes.filter((type) => type.priority.text === filter);
      result = filtered;
    }
    if (limit) {
      result = result.slice(0, Number(limit));
    }
    res.send(result);
  });

  app.get("/users", (_req: Request, res: Response) => {
    res.send(users);
  });
};

export default routes;
