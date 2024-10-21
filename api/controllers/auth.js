import { db } from "../db.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const register = async (req, res) => {

    const query = "SELECT * FROM users WHERE email = ? OR username = ?"
    
    db.query(query, [req.body.email, req.body.username], (error, data) => {
        if (error) return res.json(error);

        if(data.length) return res.status(409).json({"message": "User already exists!"})

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const query = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ];

        db.query(query, [values], (error, data) => {
            if (error) return res.json(error)
            return res.status(200).json("User has been created!")
        })
    })
}

export const login = (req, res) => {
    
    const query = "SELECT * FROM users where username=?"

    db.query(data, [req.body.username], (error, data) => {
        if(err) return res.json({"message":error})
        if(data.length == 0) return res.status(404).json({"message":"User not found."})

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)
        if(!isPasswordCorrect) return res.status(400).json({"message": "Wrong Password!"})

        const token = jwt.sign({id:data[0].id}, "jwtkey")
    })

}

export const logout = (req, res) => {
    res.json('from logout');
}

export const test = (req, res) => {
    res.json({'message' : 'test route'})
}