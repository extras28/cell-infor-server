import { Router } from 'express';
import { cellRouter } from './cell.route.js';

export const appRouter = Router();

appRouter.use(cellRouter);
