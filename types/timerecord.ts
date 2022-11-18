export type Timerecorder = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  employeeNumber: number,
  name: string,
  inTime: Date,
  outTime: Date,
  comment: string,
  temperature: number,
}