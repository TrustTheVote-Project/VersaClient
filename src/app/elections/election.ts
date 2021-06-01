export interface Election {
  id: string, // only the value part of an ExternalIdentifier?
  name: string,
  type: string,
  district: any, // TODO: District interface
  start_date: Date,
  end_date: Date
}