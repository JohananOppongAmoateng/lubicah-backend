import { Router } from "express";
import {Review} from "../models/Reviews.mjs"
import { checkSchema } from "express-validator";
import  createReviewValidationSchema  from "../utils/validationSchemas.mjs";


const reviewsRouter = Router()

reviewsRouter.get("/api/reviews/",async (request,response)=>{
    const findReviews = await Review.find({})
    if (!findReviews) return response.status(404).send("Reviews not found")
    return response.status(200).send(findReviews)
})

reviewsRouter.get("/api/reviews/:id",async (request,response) => {
    const {id} = request.params
    try {
        const findReview= await Review.findById(id)
    if (!findReview) return response.status(404).send("Review not found")

    return response.status(200).send(findReview)
    } catch (error) {
           console.log(error);
    }
    
    
})
            
reviewsRouter.post("/api/reviews/",checkSchema(createReviewValidationSchema),async (request,response) => {
    const result = validationResult(request)
    if (!result.isEmpty()) return response.status(400).send({"errors": result.array()})
    const data  = matchedData(request)
    const newReview = Review(data)
    try {
        savedReview= await newReview.save()
        return response.status(201).send(newReview)
    } catch (error) {
        console.log(error)
    }
    
})

reviewsRouter.put("/api/reviews/:id",async (request,response) => {
    const {id} = request.params
    const result = validationResult(request)
    if (!result.isEmpty()) return response.status(400).send({"errors": result.array()})
    const data  = matchedData(request)
    
    try {
        const review =  Review.findByIdAndUpdate(id,data)
        return response.status(200).send(review)
    } catch (error) {
        console.log(error);
    }
    
})

reviewsRouter.delete("/api/reviews/:id",async () => {
    const {id} = request.params
    await Review.findByIdAndDelete(id)
    
    return response.status(204)
})


export default reviewsRouter;