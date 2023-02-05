import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../prisma/db"

const deleteAll = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST" })
    return
  }

  const { userId } = req.body

  try {
    await prisma.issue.deleteMany({
      where: {
        userId,
      },
    })

    res.status(200).json({ success: true })
  } catch (e) {
    res.status(400).json({ success: false })
  }
}

export default deleteAll
