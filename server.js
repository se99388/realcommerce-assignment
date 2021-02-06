import express from 'express';
import routes from './routes';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
  })