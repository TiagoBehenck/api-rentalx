import { Category } from "../model/Category";

export interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[]
  findByName(name: string): Category
}

export { ICategoryRepository }