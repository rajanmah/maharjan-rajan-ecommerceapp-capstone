import express from 'express'
import User from '../models/userModel.js'


const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    const users = await User.find()
    res.send(users)
})


userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }
    }
    catch (e) {
        res.json("fail")
    }
})


userRouter.post("/signup", async (req, res) => {
    try {
        if (
            !req.body.email ||
            !req.body.password
        ) {
            return res.status(400).send({
                message: "Missing fields!: title, author, publishedYear"
            })
        }
        const newUser = {
            email: req.body.email,
            password: req.body.password
        }
        const user = await User.create(newUser)
        return res.status(201).send(user)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

try {

} catch (error) {
    console.log(error)
}

export default userRouter