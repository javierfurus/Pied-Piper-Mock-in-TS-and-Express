const knexfile = require("../knexfile").development;
const knex = require("knex")(knexfile);
import { Request, Response, NextFunction } from "express";
import { Card } from "../models/about";

export default {
  authorization: (req: Request, res: Response, next: NextFunction) => {
    next();
  },
  index: async (req, res) => {
    // Read every row data in from aboutCardContentFiller
    const card: Card = await knex.from("aboutCardContentFiller").select("*");
    try {
      console.log("Data acquired successfully!");
      // Render about and use rows from aboutCardContentFiller
      res.render("about", { cardsContent: card });
    } catch (err) {
      console.log(err);
    }
  },
  show: async (req, res) => {
    // Read every row data in from aboutCardContentFiller
    try {
      const aboutId = Number(req.params.id);
      const card: Card = await knex
        .from("aboutCardContentFiller")
        .select("*")
        .where("id", aboutId);
      // Render about and use rows from aboutCardContentFiller
      if (card) {
        res.json(card).status(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
