import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../prisma/db"

const upsertItem = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST" })
    return
  }

  const body = req.body

  try {
    const { id, name, description, category, issueType, priority, index } = body
    const given = { name, description, category, issueType, priority, index }

    await prisma.issue.upsert({
      where: { id: body.id },
      update: { id, ...given },
      create: { ...given },
    })
    res.status(200).json({ success: true, body })
  } catch (e) {
    res.status(400).json({ success: false, body })
  }
}

export default upsertItem
