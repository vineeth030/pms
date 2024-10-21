import User from "../models/user.js"

export const addUser = async (req, res) => {
    try {
        //res.json(req.body)
        const user = User.create(req.body)
        res.json({user})
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}