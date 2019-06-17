import { Router } from 'express';
import { Provider } from '../models';
import validator from 'express-joi-validator';
import providerJoi from '../schemas/joi/provider';

const routes = Router();

routes.put(
  '/:id',
  validator(providerJoi),
  async (req, res) => {
    let p = await Provider.findById(req.params.id).exec();
    if (p === null) {
      res.status(500).json({ message: `${req.params.id} - provider not found!` });
    }
    await Provider.findByIdAndUpdate(
      req.params.id,
      { $set: { name: req.body.name } }
    ).exec();
    res.status(200).json(await Provider.findById(req.params.id).exec());
  }
);

export default routes;