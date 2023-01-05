export interface AnimalInterface {
  Id: number;
  Name: string;
  Continents: Continents[];
  Biomes: Biomes[];
  DLC: DLC[];
  GroupSize: string;
  ImgURL: string;
}

export enum Continents {
  Africa = 'Africa',
  Asia = 'Asia',
  Europe = 'Europe',
  Antarctica = 'Antarctica',
  Australia = 'Australia',
  SouthAmerica = 'South America',
  NorthAmerica = 'North America',
}

export enum Biomes {
  Grassland,
  Tropical,
  Temperate,
}

export enum DLC {
  ConversationPack = 'Conversation Pack',
  GrasslandsAnimalPack = 'Grasslands Animal Pack',
}
