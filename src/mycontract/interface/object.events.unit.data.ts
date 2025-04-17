import { IObjectEventsAddressData } from "./object.events.address.data";

export interface IObjectEventsUnitData {
  sro?: string;
  type: string;
  address: IObjectEventsAddressData;
}
