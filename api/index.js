import express from "express";
import postRoutes from "./routes/patients.js";

const app = express();

app.use(express.json());
app.use("/api/patients", postRoutes)

app.listen(8800, () => {
    console.log("Server started on port 8800");
});