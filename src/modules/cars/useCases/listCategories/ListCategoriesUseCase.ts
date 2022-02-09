import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) { }

  async execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.list()

    return await categories
  }
}

export { ListCategoriesUseCase }