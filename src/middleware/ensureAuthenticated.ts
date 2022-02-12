import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new Error('Token missing')
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, '1b30b26f91b697705da13cb87637257e') as IPayload

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new Error('User doesnt exists!')
    }

    next()
  } catch {
    throw new Error('Invalid token!')
  }

}