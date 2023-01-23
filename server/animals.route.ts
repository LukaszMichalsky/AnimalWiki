import { ANIMALS } from './db-animals';
import { Request, Response } from 'express';

export function getAnimals(req: Request, res: Response) {
  res.status(200).json({ payload: Object.values(ANIMALS) });
}

export function getAnimalById(req: Request, res: Response) {
  const animalId: string = req.params['Id'];

  const animals: any = Object.values(ANIMALS);

  const animalById = animals.find(animals.Id === animalId);

  res.status(200).json({ payload: animalById });
}

export function addAnimal(req: Request, res: Response) {}

export function updateAnimal(req: Request, res: Response) {
  const id = req.params['id'],
    changes = req.body;

  const newAnimal = {
    ...ANIMALS[id],
    ...changes,
  };

  ANIMALS[id] = newAnimal;
  res.status(200).json(ANIMALS[id]);
}

export function removeAnimal(req: Request, res: Response) {
  const id = req.params['id'];

  delete ANIMALS[id];

  res.status(200).json(ANIMALS[id]);
}
