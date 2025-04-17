import { ILocationItemData } from './location.item.data';
import { ILocationPageData } from './location.page.data';

export interface ILocationData {
  items: ILocationItemData[];
  page: ILocationPageData;
}
