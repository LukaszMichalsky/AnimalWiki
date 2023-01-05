import * as express from 'express';
import { Application } from 'express';
import {
  getAnimalById,
  getAnimals,
  addAnimal,
  updateAnimal,
} from './animals.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({ origin: true }));

app.route('/api/animals').get(getAnimals);

app.route('api/animals/:id').get(getAnimalById);

app.route('api/animals/:id').put(updateAnimal);

app.route('api/animals').post(addAnimal);

const httpServer = app.listen(9000, () => {
  console.log('HTTP REST API Server running at ' + httpServer.address());
});
