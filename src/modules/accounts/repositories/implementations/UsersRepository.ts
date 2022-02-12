import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private respository: Repository<User>

  constructor() {
    this.respository = getRepository(User)
  }

  async create({
    name,
    email,
    password,
    driver_license
  }: ICreateUserDTO): Promise<void> {
    const user = this.respository.create({
      name,
      email,
      password,
      driver_license
    })

    await this.respository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.respository.findOne({ email })

    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.respository.findOne(id)

    return user
  }
}

export { UsersRepository }