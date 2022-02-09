import { Category } from '../../entities/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  async execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.list()

    return await categories
  }
}

export { ListCategoriesUseCase }