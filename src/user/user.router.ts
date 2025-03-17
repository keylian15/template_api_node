import { Router } from 'express'
import { createUser, fetchUser, login } from './user.controller'

export const userRouter = Router()

userRouter.get('/:userId', fetchUser)
userRouter.post('/', createUser)
userRouter.post('/login', login)
