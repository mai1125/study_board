import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board, GENDER } from '../interface/board.interface';
import { Category } from '../interface/category.interface';
import { Categories } from './category.entity';

@Entity()
export class Boards implements Board {
  @PrimaryGeneratedColumn('increment', { comment: 'ID' })
  id?: number;

  @Column({ comment: '名前' })
  name: string;

  @Column({ comment: '年齢' })
  age: number;

  @Column('enum', { comment: '性別', enum: GENDER })
  gender: typeof GENDER[keyof typeof GENDER];

  @Column({ comment: 'タイトル' })
  title: string;

  @Column({ comment: '本文' })
  text: string;

  @ManyToMany(() => Categories)
  @JoinTable()
  category: Category[];
}
