import { Prisma } from "@utils/prisma_client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, password } = req.body;
    const user = await Prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
