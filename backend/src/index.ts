import express from 'express';
import routes from './routes/index';
const app = express()

const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
