import express from 'express';
import cors from 'cors';
import routes from './Routes/index.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Serve run in localhost: ${PORT}`);
});
