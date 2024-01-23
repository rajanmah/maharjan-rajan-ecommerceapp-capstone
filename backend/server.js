import express from 'express'
// import data from './data.js'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoutes.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'

dotenv.config()
//connection to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to Database')
}).catch(error=>{
    console.log(error.message)
})

const app = express()
//importing data.js to the database
app.use(cors())
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)


// app.get('/api/products', (req, res)=>{
//     res.send(data.products)
// })


// app.get('/api/products/slug/:slug', (req, res)=>{
//     const product = data.products.find(x=>x.slug === req.params.slug)
//     if(product) {
//         res.send(product)
//     } else {
//         res.status(404).send({message:'Product not found'})
//     }
// })

// app.get('/api/products/:id', (req, res)=>{
//     const product = data.products.find(x=>x._id === req.params.id)
//     if(product) {
//         res.send(product)
//     } else {
//         res.status(404).send({message:'Product not found'})
//     }
// })


//login auth
// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

const port= process.env.PORT || 5000
app.listen(port, ()=> {
console.log(`The Server is Listing at ${port}`)
})