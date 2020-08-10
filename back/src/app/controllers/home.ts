const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);
import { Request, Response, NextFunction } from 'express';

export default {
  authorization: (req: Request, res: Response, next: NextFunction) => {
    next();
  },
  index: async (req: Request, res: Response) => {
  // Read every row data in from cardContentFiller
    try {
      const rows = await knex.from('cardContentFiller').select('*');
      // Render index and use rows from cardContentFiller
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500);
      throw err;
  }
}
};
