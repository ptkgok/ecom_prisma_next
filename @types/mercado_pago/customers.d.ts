declare module CustumersMP {
  export interface Phone {
    area_code: number;
    number: number;
  }

  export interface Identification {
    type: string;
    number: number;
  }

  export interface Address {
    id: string;
    zip_code: string;
    street_name: string;
    street_number: number | string;
  }

  export interface Metadata {
    source_sync: string;
  }

  export interface Card {}

  export interface Address2 {}

  export interface RootObject {
    id?: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: Phone;
    identification: Identification;
    address: Address;
    description: string;
    date_created?: string | Date;
    date_last_updated?: string | Date;
    date_registered: string | Date;
    metadata?: Metadata;
    default_address: string;
    cards: Card[];
    addresses: Address2[];
    live_mode: boolean;
    default_card: string;
  }
}
