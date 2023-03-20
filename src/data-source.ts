import "reflect-metadata"
import { DataSource } from "typeorm"
import config from "./config"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: config.url,
    ssl: config.node_env === "production" ?
    { rejectUnauthorized: false}
    : false,
    synchronize: false,
    logging: true,
    entities: config.node_env === "production"
        ? ["dist/src/entities/*.js"]
        : ["src/entities/*.ts"],
    migrations: config.node_env === "production"
        ? ["dist/src/migrations/*.js"]
        : ["src/migrations/*.ts"],
  })

async function databaseInitialize () {
    try {
      await AppDataSource.initialize()
  
      console.log('Database connected')
    } catch (e: unknown) {
      console.error(e)
    }
  }
  
  export default databaseInitialize