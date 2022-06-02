import { MercadoPagoClient } from "@utils/mercado_pago_client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const methods = await MercadoPagoClient({ url: "payment_methods" });
    res.status(200).json(methods);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
