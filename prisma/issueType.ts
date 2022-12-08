export type IssueType = {
  id: string
  name: string
  userId: string | null
  description: string
  category: number
  issueType: number
  priority: number
  index: number
  createdAt: string | Date
}