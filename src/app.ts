import express from 'express';
import { IRoute } from './core/interfaces';
import { MONGODB_URL, PORT } from './core/utils/env';
import mongoose from 'mongoose';

export class App {
    public app: express.Application;

    constructor(routes: IRoute[]) {
        this.app = express();

        this.connectToDatabase();
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

    private connectToDatabase() {
        try {
            mongoose.connect(MONGODB_URL!);
            console.log("Connected to MongoDB !!!");
        } catch (error) {
            console.error("Failed to connect to MongoDB:", error);
            process.exit(1);
        }
    }
}