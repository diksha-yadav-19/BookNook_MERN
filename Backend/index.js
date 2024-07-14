import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookroute.js";
import cors from "cors";
import userRoute from "./routes/user_route.js";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function connectDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

connectDB();
app.use("/book", bookRoutes);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
