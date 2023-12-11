const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const Blog = require("./models/blogModal");



app.use(cors());
app.use(express.json()); // Parse JSON request bodies




// blog api code 
app.use(bodyParser.json());
// mongoose.connect(
//   "mongodb+srv://rishabh2560:XJUHAmrOAzVUrvJD@cluster0.xhxp5ho.mongodb.net/?retryWrites=true&w=majority"
// );


mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get("/getBlogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.post("/postAvyaan123", async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
  });
  await blog.save();
  res.json(blog);
});

app.get("/getBlog/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  res.json(blog);
});


// rishabh2560
// XJUHAmrOAzVUrvJD;

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






























