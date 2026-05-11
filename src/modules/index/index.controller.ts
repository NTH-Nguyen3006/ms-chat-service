import { Request, Response } from "express";

export default class IndexController {
    public index = (req: Request, res: Response) => {
        res.status(200).send({ message: "Chat Service is running..." })
    }
}