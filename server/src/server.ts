import Fastify from "fastify";
import cors from "@fastify/cors"
import { appRoutes } from "./routes";

const app = Fastify()

//necessário importar o cors (npm i @fastify/cors para que o front consiga se comunicar com as rotas específicas)
app.register(cors)
app.register(appRoutes)

//ouve a porta 3333
app.listen({
    port: 3333,
    host: '0.0.0.0'
  }).then(() => {
    console.log('HTTP Server running!')
  })