export type IssueType = {
  id: string
  name: string
  userId: string | null
  assignees?: AssigneeType[]
  description: string
  category: number
  issueType: number
  priority: number
  index: number
  createdAt: string | Date
}

export type AssigneeType = {
  id: number
  name: string
  issues?: IssueType[]
}