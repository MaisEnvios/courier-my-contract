import { ILocationPageData } from './location.page.data';
import { IZipcodeItemData } from './zipcode.item.data';

export interface IZipcodeData {
  items: IZipcodeItemData[];
  page: ILocationPageData;
}
