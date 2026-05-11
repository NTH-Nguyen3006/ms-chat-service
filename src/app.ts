import express from 'express';
import { IRoute } from './core/interfaces';
import { PORT } from './libs/env';

export class App {
    public app: express.Application;

    constructor(routes: IRoute[]) {
        this.app = express();

        this.initializedRoutes(routes);
    }

    public listen() {
        this.app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }

    private initializedRoutes(routes: IRoute[]) {
        routes.forEach(route => {
            this.app.use("/", route.router);
        });
    }
}