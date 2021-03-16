export interface Election {
  id: string, // only the value part of an ExternalIdentifier?
  name: string,
  type: string,
  district: any,
  start_date: Date,
  end_date: Date
}