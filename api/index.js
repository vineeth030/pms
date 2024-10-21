import express from "express"
import sequelize from "./sequelize.js"
import postRoutes from "./routes/patients.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

const app = express();

sequelize.sync().then(() => {
    console.log('Database & tables created!')
}).catch((error) => {
    console.log('Error: ', error)
})

app.use(express.json())
app.use("/api/patients", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(8800, () => {
    console.log("Server started on port 8800")
});