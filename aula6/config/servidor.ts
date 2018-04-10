import * as Express from "express";
import * as BodyParser from "body-parser";

export function init() {
  const app = Express();

  app.use(BodyParser.urlencoded({ extended: true}));
  app.use(BodyParser.json());

  return app;
};