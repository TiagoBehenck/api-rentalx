import { Specification } from '../entities/Specification';
import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';


interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
  list(): Promise<Specification[]>
  findByName(name: string): Promise<Specification>
}

export { ISpecificationsRepository }