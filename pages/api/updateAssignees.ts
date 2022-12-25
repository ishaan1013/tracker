import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma/db'

const updateAssignees = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  if(req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST' })
    return
  }

  const body = req.body

  try {

    // const { id, name, description, category, issueType, priority, index } = body
    const { connect, disconnect }: {
      connect: {name: string}[]
      disconnect: {name: string}[]
    } = body

    await prisma.issue.update({
      where: {id: body.id},
      data: {
        assignees: {
          connect
        }
      },
      include: {
        assignees: true
      }
    })
    await prisma.issue.update({
      where: {id: body.id},
      data: {
        assignees: {
          disconnect
        }
      },
      include: {
        assignees: true
      }
    })
    res.status(200).json({ success: true, message: body })
  } catch (e) {
      res.status(400).json({ success: false, message: body })
  }

}

export default updateAssignees