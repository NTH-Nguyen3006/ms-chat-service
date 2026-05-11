import { Router } from 'express';
import { IRoute } from 'src/core/interfaces'
import IndexController from './index.controller';


export default class IndexRoute implements IRoute {
    path: string = "/";
    router: Router = Router();
    indexController: IndexController = new IndexController();

    constructor() {

    }

    public initializeRoute() {
        this.router.get(this.path, this.indexController.index)
    }
}