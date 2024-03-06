import { Router } from "express";
import { Order } from "../models/Order.mjs";
import { checkSchema,validationResult,matchedData } from "express-validator";
import { OrderItem } from "../models/OrderItem.mjs";
import  createOrderValidationSchema from "../utils/validationSchemas.mjs";

const orderRouter = Router();


orderRouter.get("/api/orders/",async(request,response)=>{
    const findOrders = await Order.find({})
    if (!findOrders) return response.status(404).send("Orders not found")
    return response.status(200).send(findOrders)
})

orderRouter.get("/api/orders/:id",async (request,response) => {
    const {id} = request.params
    const findOrder= await Order.findById(id)
    if (!findOrder) return response.status(404).send("Order not found")

    return response.status(200).send(findOrder)
})

orderRouter.post("/api/orders/",checkSchema(createOrderValidationSchema),async (req,res) => {
    const result = validationResult(request)
    if (!result.isEmpty()) return response.status(400).send({"errors": result.array()})
    const data  = matchedData(request)
    const newOrder = Order(data)
    try {
        savedOrder= await newOrder.save()
        return response.status(201).send(newOrder)
    } catch (error) {
        console.log(error)
    }
    
})

            
orderRouter.put("/api/orders/:id",async (request,response) => {
    const {id} = request.params
    const result = validationResult(request)
    if (!result.isEmpty()) return response.status(400).send({"errors": result.array()})
    const data  = matchedData(request)
    
    try {
        const order = Order.findByIdAndUpdate(id,data)
        if (!order) return response.status(404)
        return response.status(200).send(order)
    } catch (error) {
        console.log(error);
    }
    
})

orderRouter.delete("/api/orders/:id",async (request,response) => {
    const {id} = request.params
    const order = await Order.findByIdAndDelete(id)
    if (!order) return response.status(404)
        return response.status(200).send(order)
    return response.status(204)
})


export default orderRouter;