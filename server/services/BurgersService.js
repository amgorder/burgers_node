import { FAKEDB } from "../db/FAKEDB";
//fake DB
let id = 2
class BurgerService {

    //GET all burgers from the fake database
    getAll() {
        return FAKEDB.burgers
    }
    //crerate new burger using PUSH to add to array
    create(newBurger) {
        newBurger.id = id++
        FAKEDB.burgers.push(newBurger)
        return newBurger
    }


    //DELETE burger from array
    // set  an ID to find the right burger to delete
    delete(id) {
        findBurger(id)
        FAKEDB.burgers = FAKEDB.burgers.filter(b => b.id != id)
        //making sure not to delete the wrong item
    }

    //EDIT using ?idk what the f is going on here
    edit() {

    }

    //get One of the burgers out of the array
    //using the id

    getOne() {

    }

}

function findBurger(id) {
    let foundBurger = FAKEDB.burgers.find(b => b.id == id)
    if (!foundBurger) { throw new Error("invalid id") }
    return foundBurger
}

export const burgerService = new BurgerService()