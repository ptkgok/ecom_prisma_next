declare module PaymentsMP {
  export interface Identification {
    number: number;
    type: string;
  }

  export interface Payer {
    id: number;
    email: string;
    identification: Identification;
    type: string;
  }

  export interface Metadata {}

  export interface Item {
    id: string;
    title: string;
    description: string;
    picture_url: string;
    category_id: string;
    quantity: number;
    unit_price: number;
  }

  export interface Payer2 {
    registration_date: Date;
  }

  export interface ReceiverAddress {
    street_name: string;
    street_number: number;
    zip_code: number;
    city_name: string;
    state_name: string;
  }

  export interface Shipments {
    receiver_address: ReceiverAddress;
  }

  export interface AdditionalInfo {
    items: Item[];
    payer: Payer2;
    shipments: Shipments;
  }

  export interface Order {}

  export interface TransactionDetails {
    net_received_amount: number;
    total_paid_amount: number;
    overpaid_amount: number;
    installment_amount: number;
  }

  export interface FeeDetail {
    type: string;
    amount: number;
    fee_payer: string;
  }

  export interface Identification2 {
    number: number;
    type: string;
  }

  export interface Cardholder {
    name: string;
    identification: Identification2;
  }

  export interface Card {
    first_six_digits: number;
    last_four_digits: number;
    expiration_month: number;
    expiration_year: number;
    date_created: Date;
    date_last_updated: Date;
    cardholder: Cardholder;
  }

  export interface ApplicationData {
    name: string;
    version: string;
  }

  export interface TransactionData {
    qr_code_base64: string;
    qr_code: string;
  }

  export interface PointOfInteraction {
    type: string;
    application_data: ApplicationData;
    transaction_data: TransactionData;
  }

  export interface RootObject {
    id: number;
    date_created: Date;
    date_approved: Date;
    date_last_updated: Date;
    money_release_date: Date;
    issuer_id: number;
    payment_method_id: string;
    payment_type_id: string;
    status: string;
    status_detail: string;
    currency_id: string;
    description: string;
    taxes_amount: number;
    shipping_amount: number;
    collector_id: number;
    payer: Payer;
    metadata: Metadata;
    additional_info: AdditionalInfo;
    order: Order;
    external_reference: string;
    transaction_amount: number;
    transaction_amount_refunded: number;
    coupon_amount: number;
    transaction_details: TransactionDetails;
    fee_details: FeeDetail[];
    statement_descriptor: string;
    installments: number;
    card: Card;
    notification_url: string;
    processing_mode: string;
    point_of_interaction: PointOfInteraction;
  }
}
