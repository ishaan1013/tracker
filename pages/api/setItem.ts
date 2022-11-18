import { PrismaClient } from '.prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const setItem = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const {query: { id, category_id, name, description }, method} = req

  if (
    typeof id === 'string' 
    && typeof name === 'string' 
    && typeof description === 'string' 
    && typeof category_id === 'number' 
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
        category_id: category_id
      }
    })
    res.status(200).json({ success: true })
  }
  res.status(400).json({ success: false, message: 'Bad request' })

}

export default setItem