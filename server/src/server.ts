import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import 'dotenv/config'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  // origin: true -> Todas as urls de front-end poderão acessar a API
  origin: true,
})
app.register(jwt, {
  secret: 'valaskjalf!@',
})
app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
