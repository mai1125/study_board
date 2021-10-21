import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Category } from '../interface/category.interface';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  create(@Body() param: Category): Promise<Category> {
    return this.categoryService.create(param);
  }

  @Get('read')
  read(): Promise<Category[]> {
    return this.categoryService.find();
  }

  @Post('update')
  update(@Body() param: Category): Promise<Category> {
    return this.categoryService.update(param);
  }

  @Get('delete')
  delete(@Query() param: Category): Promise<Category> {
    return this.categoryService.delete(param);
  }

  @Get('findone')
  findOne(@Query() param: Category): Promise<Category> {
    return this.categoryService.findOne(param);
  }
}
