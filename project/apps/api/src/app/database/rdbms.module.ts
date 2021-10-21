import { Module } from '@nestjs/common';
// service
import { BoardService } from '../controllers/board.service';
import { CategoryService } from '../controllers/category.service';
const services = [BoardService, CategoryService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class RDBMSModule {}
