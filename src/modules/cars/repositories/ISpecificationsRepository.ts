import { Specification } from '../entities/Specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
  list(): Promise<Specification[]>
  findByName(name: string): Promise<Specification>
}

export { ISpecificationsRepository }