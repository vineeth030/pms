import { db } from "../db.js";
import bcrypt from 'bcrypt';

export const register = (req, res) => {

    const query = "SELECT * FROM users WHERE email = ? OR username = ?";
    
    db.query(query, [req.body.email, req.body.username], (error, data) => {
        if (error) return res.json(error);

        res.json(['from register 3', req.body.email]);

        if(data.length) return res.status(409).json("User already exists!");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash
        ];

        db.query(query, [values], (error, data) => {
            if (error) return res.json(error);
            return res.status(200).json("User has been created!");
        })
    })

    res.json('from register');
}

export const login = (req, res) => {
    res.json('from login');
}

export const logout = (req, res) => {
    res.json('from logout');
}