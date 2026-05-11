import { App } from "./app";
import { IRoute } from "./core/interfaces";
import { IndexRoute } from "./modules/index";

const routes: IRoute[] = [
    new IndexRoute(),
];
const app = new App(routes);

app.listen();