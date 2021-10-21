import { Module } from '@nestjs/common';

//typeORM
import { TypeOrmModule } from './typeorm/typeorm.module';

// service
import { BoardService } from './controllers/board.service';
import { CategoryService } from './controllers/category.service';
const services = [BoardService, CategoryService];

// controllers
import { BoardController } from './controllers/board.controller';
import { CategoryController } from './controllers/category.controller';
const controllers = [BoardController, CategoryController];

@Module({
  imports: [TypeOrmModule],
  providers: [...services],
  controllers: [...controllers],
})
export class AppModule {}
