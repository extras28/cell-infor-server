import { Router } from 'express';
import * as cellController from '../controllers/cell.controller.js';

export const cellRouter = Router();

cellRouter.post('/cell/update', cellController.updateListCell);
