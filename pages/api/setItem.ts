import { PrismaClient } from '.prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type ReqBody = {
  id: string
  name: string
  description: string
  category: number
  issueType: number
  priority: number
  index: number
}

function isValidBody<T extends Record<string, unknown>>(
  body: any,
  fields: (keyof T)[],
): body is T {
  return Object.keys(body).every((key) => fields.includes(key))
}

const setItem = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  if(req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST' })
    return
  }

  // const body = JSON.parse(req.body)
  const body = req.body


  if (!isValidBody<ReqBody>(body, ['id', 'name', 'description', 'category', 'issueType', 'priority', 'index'])) {
    res.status(400)
  }

  if (
    typeof body.id === 'string' 
    && typeof body.name === 'string' 
    && typeof body.description === 'string' 
    && typeof body.category === 'number' 
    && typeof body.issueType === 'number' 
    && typeof body.priority === 'number' 
    && typeof body.index === 'number' 
  ) {
  // try {
    const prisma = new PrismaClient()
    await prisma.issue.update({
      where: {id: body.id},
      data: {name: body.name, description: body.description, category: body.category, issueType: body.issueType, priority: body.priority, index: body.index}
    })
    res.status(200).json({ success: true, message: body })
  // } catch (error) {
  //   res.status(400).json({ success: false, message: (
  //     typeof JSON.parse(body).id === 'string' 
  //     && typeof JSON.parse(body).name === 'string' 
  //     && typeof JSON.parse(body).description === 'string' 
  //     && typeof JSON.parse(body).category === 'number' 
  //     && typeof JSON.parse(body).issueType === 'number' 
  //     && typeof JSON.parse(body).priority === 'number' 
  //     && typeof JSON.parse(body).index === 'number' 
  //   ) })
  }
  else {
    res.status(400).json({ success: false, message: body })
  }

}

export default setItem