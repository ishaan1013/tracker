interface CategoryType {
  id: number
  name: string
}

export interface IssueType {
  id: string
  name: string
  description: string
  category: CategoryType | null
  category_id: number
}