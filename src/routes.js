import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import FileController from "./app/controllers/FileController";
import AdminController from "./app/controllers/AdminController";

import authMiddleware from "./app/middlewares/auth";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/admin', AdminController.index);

export default routes;