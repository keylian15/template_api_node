// Fichier : src/index.ts
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import path from 'path'
import cors from 'cors'
import { userRouter } from './user/user.router'

export const app = express()
const port = process.env.PORT || 3000

// Charger la spécification Swagger
const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'))

app.use(
  cors({
    origin: '*', // Permet à toutes les origines d'accéder à l'API
    methods: 'GET,POST,PUT,DELETE,PATCH', // Spécifie les méthodes autorisées
    allowedHeaders: 'Content-Type,Authorization', // Spécifie les en-têtes autorisés: '*',
  }),
)

// Serveur Swagger UI à l'adresse /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json())

app.use('/users', userRouter)

export const server = app.listen(port)

export function stopServer() {
  server.close()
}
