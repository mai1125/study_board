import { Injectable } from '@nestjs/common';
import { AbstractRDBMSService } from '../database/abstract.service';
import { Categories } from '../entities';
import { Category } from '../interface/category.interface';

@Injectable()
export class CategoryService extends AbstractRDBMSService<Category> {
  constructor() {
    super(Categories.name);
  }
}
