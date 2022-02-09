import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO
} from '../ISpecificationsRepository';


class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>


  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description
    })

    await this.repository.save(specification)
  }

  async list(): Promise<Specification[]> {
    const specifications = this.repository.find()

    return specifications
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ name })

    return specification
  }
}

export { SpecificationsRepository }