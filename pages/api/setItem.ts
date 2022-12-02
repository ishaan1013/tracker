import { PrismaClient } from '.prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const setItem = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const {query: { id, category, name, description, issueType, priority }, method} = req

  if (
    typeof id === 'string' 
    && typeof name === 'string' 
    && typeof description === 'string' 
    && typeof category === 'number' 
    && typeof issueType === 'number' 
    && typeof priority === 'number' 
    && method === 'POST'
  ) {
    const prisma = new PrismaClient()
    await prisma.issue.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
        category: category,
        issueType: issueType,
        priority: priority
      }
    })
    res.status(200).json({ success: true })
  }
  res.status(400).json({ success: false, message: 'Bad request' })

}

export default setItem