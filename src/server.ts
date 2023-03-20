import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

import databaseInitialize from './data-source'
import routes from './routes'

export const app: express.Application = express()

const PORT = process.env.PORT || 3000

databaseInitialize()

app.use(express.json())
app.use(cors())
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
