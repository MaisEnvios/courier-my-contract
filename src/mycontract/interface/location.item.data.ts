import { ILocationNeighborhoodData } from './location.neighborhood.data';
import { ILocationRangeData } from './location.range.data';

export interface ILocationItemData {
  number: string;
  state: string;
  location: string;
  codification: string;
  type: string;
  ibge: string;
  range: ILocationRangeData[];
  neighborhood: ILocationNeighborhoodData[];
}
