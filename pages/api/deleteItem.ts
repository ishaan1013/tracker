import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../prisma/db"

const deleteItem = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST" })
    return
  }

  const body = req.body
  try {
    await prisma.issue.delete({
      where: { id: body.id },
    })
    res.status(200).json({ success: true, body })
  } catch (e) {
    res.status(400).json({ success: false, body })
  }
}

export default deleteItem
