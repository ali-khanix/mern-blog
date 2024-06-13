import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './src/routes/user.route.js';

import authRoutes from './src/routes/auth.route.js';

mongoose
  .connect(
    'mongodb+srv://ali:ali@mern-blog.mosxda6.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog'
  )
  .then(console.log('mongoDB is connected'))
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000!');
});

app.use('/server/user', userRoutes);
app.use('/server/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
