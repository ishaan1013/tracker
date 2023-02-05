import { Issue } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../prisma/db"
import { IssueType } from "../../prisma/issueType"

const getIssues = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET" })
    return
  }

  try {
    const dataRes: Issue[] = await prisma.issue.findMany({
      orderBy: {
        // @ts-ignore: Production build bug?
        index: "asc",
      },
      include: {
        assignees: true,
      },
    })
    const data: IssueType[][] = [[], [], []]
    dataRes.map((item) => {
      const newCreatedAt = item.createdAt.toString()
      const newItem: IssueType = item
      newItem.createdAt = newCreatedAt
      newItem.category === 0
        ? data[0].push(newItem)
        : newItem.category === 1
        ? data[1].push(newItem)
        : data[2].push(newItem)
    })

    res.status(200).json({ success: true, data })
  } catch (e) {
    res.status(400).json({ success: false, e })
  }
}

export default getIssues
