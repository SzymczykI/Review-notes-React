import { Request, Response } from "express";
import reviewnotes from "../db/dummy-data-reviewnotes.json";

export const getReviewnotesHandler = (req: Request, res: Response) => {
  const limit = req.query.limit;
  let result = reviewnotes;
  if (req.query.type) {
    const filter = req.query.type;
    const filtered =
      result !== reviewnotes
        ? result.filter((type) => type.type === filter)
        : reviewnotes.filter((type) => type.type === filter);
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
  if (!result) return res.sendStatus(500);
  res.send(result);
};
