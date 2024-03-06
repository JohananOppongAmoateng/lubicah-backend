import { Router, request } from "express";
import { MenuItem } from "../models/Menu-Item.mjs";
import { validationResult,matchedData,checkSchema } from "express-validator";
import createMenuItemSchema from "../utils/validationSchemas.mjs"
const menuItemRouter = Router();

menuItemRouter.get("/api/menuitems/:id",async (request,response)=>{
    const {id} = request.params
    const findMenuItem = await MenuItem.findById(id)
    if (!findMenuItem) return response.status(404).send("MenuItem not found")

    return response.status(200).send(findMenuItem)

})
menuItemRouter.get("/api/menuitems/",async (request,response) => {
    const findMenuItems = await MenuItem.find({})
    if (!findMenuItems) return response.status(404).send("Menu Items not found")

    return response.status(200).send(findMenuItems)
})
            
menuItemRouter.post("/api/menuitems/",checkSchema(createMenuItemSchema),async (request,response) =>{
    const result = validationResult(request)
    if (!result.isEmpty()) return response.status(400).send({"errors": result.array()})
    const data  = matchedData(request)
    const newMenuItem = MenuItem(data)
    try {
        savedMenuItem= await newMenuItem.save()
        return response.status(201).send(newMenuItem)
    } catch (error) {
        console.log(error)
    }
    
})

menuItemRouter.put("/api/menuitems/:id",async (request,response) => {
    const {id} = request.params
    const result = validationResult(request)
    if (!result.isEmpty()) return response.status(400).send({"errors": result.array()})
    const data  = matchedData(request)
    
    try {
        const menuItem = MenuItem.findByIdAndUpdate(id,data)
        return response.status(200).send(menuItem)
    } catch (error) {
        console.log(error);
    }
    
})

menuItemRouter.delete("/api/menuitems/:id",async (request,response) => {
    const {id} = request.params
    await MenuItem.findByIdAndDelete(id)
    return response.status(204)
})



export default menuItemRouter;