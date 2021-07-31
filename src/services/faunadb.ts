import { Client } from 'faunadb'

const faunaDB = new Client({
  secret: process.env.FAUNADB_SECRET as string,
  domain: 'db.us.fauna.com'
})

export default faunaDB
