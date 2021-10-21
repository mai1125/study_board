import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeORM } from '@nestjs/typeorm';
import TypeOrmOptions from './typeorm.config';

// Entities
import { Boards, Categories } from '../entities';
const entities = [Boards, Categories];
@Module({
  imports: [TypeORM.forRoot(TypeOrmOptions), TypeORM.forFeature([...entities])],
  exports: [TypeORM.forFeature([...entities])],
})
export class TypeOrmModule {}
