import { Client } from 'faunadb'

const faunaDB = new Client({
  secret: process.env.FAUBADB_SECRET as string
})

export default faunaDB
