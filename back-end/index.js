const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const movieSchema =  new mongoose.Schema({
    title:String,
    ratting:Number,
    releaseDate:String
})

const Movie = mongoose.model("movie",movieSchema)

app.get("/", async (req, res) => {
    try {
      let data = await Movie.find();
      res.send({ data });
    } catch (error) {
      res.send({ error: error.message });
    }
  });
  

app.post("/add", async (req, res) => {
    console.log(req.body);
    try {
      const data = new Movie(req.body);
      data.save().then(
        () => res.status(200).send({response:"New Movie Data added", data }),
        (err) => console.log("error va", err)
      );
    } catch (error) {
      res.status(400).json("Some ERROR");
    }
})  

mongoose
  .connect(
    "mongodb+srv://sample:sample@practice.nnpxfw8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    // console.log(process.env.MONGODB_URL)
    app.listen(3001, () => {
      console.log("Server is running");
    });
  });
