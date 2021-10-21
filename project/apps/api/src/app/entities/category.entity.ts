import { Entity, PrimaryColumn } from 'typeorm';
import { Category, CATEGORY_TYPE } from '../interface/category.interface';

@Entity()
export class Categories implements Category {
  @PrimaryColumn('enum', { comment: 'カテゴリー', enum: CATEGORY_TYPE })
  name: typeof CATEGORY_TYPE[keyof typeof CATEGORY_TYPE];
}
