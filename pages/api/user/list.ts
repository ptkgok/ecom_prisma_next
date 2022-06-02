import { Prisma } from "@utils/prisma_client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usersList = await Prisma.user.findMany();
    res.status(200).json(usersList);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
