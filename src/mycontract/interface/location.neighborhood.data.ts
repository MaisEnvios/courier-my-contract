import { ILocationRangeData } from "./location.range.data";

export interface ILocationNeighborhoodData {
  neighborhood: string;
  number: string;
  range: ILocationRangeData[];
}
