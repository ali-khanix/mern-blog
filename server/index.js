import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://ali:ali@mern-blog.mosxda6.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog'
  )
  .then(console.log('mongoDB is connected'))
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// New
