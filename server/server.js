require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3002
const db = require('./db')

//Middle ware
app.use(cors())
app.use(express.json())

//Get all Restaurants
app.get("/api/v1/restaurants", async (req,res) => {
    try{
        // const result  = await db.query('SELECT * FROM  restaurants')
        const result = await db.query(' select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from review group by restaurant_id) review on restaurants.id = review.restaurant_id')
        // console.log(resp)
       res.status(200).json({
        status : "Success",
        result : result.rows.length,
        data : {
           restaurants : result.rows
        }
       }) 
    }
    catch(err){
        console.log(err)
    }
    
})

//Get Single Restaturant 
app.get("/api/v1/restaurants/:id",async(req, res) => {
    try{
        const result  = await db.query('select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from review group by restaurant_id) review on restaurants.id = review.restaurant_id WHERE id = $1',[req.params.id])
        const review  = await db.query('SELECT * FROM  review wHERE  restaurant_id = $1',[req.params.id])

        console.log(review)
       res.status(200).json({
        status : "Success",
        result : result.rows.length,
        data : {
           restaurants : result.rows[0],
           review : review.rows
          
        }
       }) 
    }
    catch(err){
        console.log(err)
    }
    
}) 

//Post Add the Resturant 
app.post("/api/v1/restaurants", async(req, res)=>{
    try{
        const result  = await db.query('INSERT INTO restaurants (name, location, price_range) values($1, $2, $3) returning *',[req.body.name, req.body.location, req.body.price_range])
        console.log(result)
       res.status(201).json({
        status : "Success",
        result : result.rows.length,
        data : {
           restaurants : result.rows[0]
        }
       }) 
    }
    catch(err){
        console.log(err)
    }
})

//Put and update the Restaturant
app.put('/api/v1/restaurants/:id', async(req, res)=>{
    try{
        const result  = await db.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 '  ,[req.body.name, req.body.location, req.body.price_range,req.params.id])
        
        console.log(result)
       res.status(201).json({
        status : "Success",
        result : result.rows.length,
        data : {
           restaurants : result.rows[0]
        }
       }) 

    }
    catch(err){
        console.log(err)
    }
})

//Delete the Restaturant
app.delete('/api/v1/restaurants/:id',async(req, res) => {
    try{
        const result = await db.query('DELETE FROM restaurants WHERE id = $1',[req.params.id])
        res.status(204).json({
            status : "Success",
           }) 
    }
    catch(err){
        console.log(err)
    }
})

//Post a Review 
app.post('/api/v1/restaurants/:id/addReview',async(req,res)=>{
    try{
        const reslut = await db.query('INSERT INTO review (name,review,rating,restaurant_id) VALUES ($1,$2,$3,$4) returning *',[req.body.name,req.body.review,req.body.rating,req.params.id])
       console.log(reslut)
        res.status(201).json({
            status : 'success',
            data : {
                review : reslut.rows[0]
            }
        })
        }
    catch(err){
        console.log(err)
    }
})
app.listen(port, () =>(
console.log(`listen to port ${port}`)
))