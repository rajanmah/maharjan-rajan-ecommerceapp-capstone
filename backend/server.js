import express from 'express'
import data from './data.js'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoutes.js'

dotenv.config()
//connection to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to Database')
}).catch(error=>{
    console.log(error.message)
})

const app = express()
//importing data.js to the database
app.use('/api/seed', seedRouter)



app.use(cors())
app.get('/api/products', (req, res)=>{
    res.send(data.products)
})
app.get('/api/products/slug/:slug', (req, res)=>{
    const product = data.products.find(x=>x.slug === req.params.slug)
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message:'Product not found'})
    }
})

app.get('/api/products/:id', (req, res)=>{
    const product = data.products.find(x=>x._id === req.params.id)
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message:'Product not found'})
    }
})

const port= process.env.PORT || 5000
app.listen(port, ()=> {
console.log(`The Server is Listing at ${port}`)
})