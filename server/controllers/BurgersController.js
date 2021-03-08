import express from "express"
import BaseController from "../utils/BaseController";
import { burgerService } from "../services/BurgersService";
import { FAKEDB } from "../db/FAKEDB";





export class BurgersController extends BaseController {

    constructor() {
        super("api/burgers");
        //targeting burgers from "?" localhost 3000
        this.router
            //GET
            .get("", this.getALL)
            //POST
            .post("", this.create)
            //DELETE
            .delete("/:id", this.delete);

    }


    async getALL(req, res, next) {
        //request, result, next ? is that the pattern?
        try {
            const burgers = burgerService.getAll()
            //request
            res.send(burgers);
            //RES = burgers
        } catch (error) {
            next(error);
            //NEXT
        }

    }

    async create(req, res, next) {
        try {
            let newBurger = req.body
            //what does body represent ? from above?
            const burger = burgerService.create(newBurger)
            res.status(201).send({ data: burger, message: "burger created!", count: FAKEDB.burgers.length });
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id
            burgerService.delete(id)
            res.send("Burger Delete")
        } catch (error) {
            next(error)
        }
    }

}