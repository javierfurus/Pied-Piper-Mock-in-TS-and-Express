// const knexfile = require('../knexfile').development; // Not used yet
// const knex = require('knex')(knexfile);
import { Request, Response, NextFunction } from 'express';

export default {
  authorization: (req: Request, res: Response, next: NextFunction) => {
    next();
  },
  index: async (req, res) => {
    // Read every row data in from aboutCardContentFiller
    try {
      res.render('join');
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
