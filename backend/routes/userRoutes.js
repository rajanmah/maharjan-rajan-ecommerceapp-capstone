import express from 'express'
import User from '../models/userModel.js'


const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    const users = await User.find()
    res.send(users)
})


userRouter.post("/login", async (req, res) => {
    const { email } = req.body

    try {
        const check = await User.findOne({ email: email })

        if (check) {
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
    const { email, password } = req.body

    const data = {
        email: email,
        password: password
    }

    try {
        const check = await User.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await User.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

export default userRouter