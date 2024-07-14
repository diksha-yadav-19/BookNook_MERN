import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
