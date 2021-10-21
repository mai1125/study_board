import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Board } from '../interface/board.interface';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post('create')
  create(@Body() param: Board): Promise<Board> {
    return this.boardService.create(param);
  }

  @Get('read')
  read(): Promise<Board[]> {
    return this.boardService.find();
  }

  @Post('update')
  update(@Body() param: Board): Promise<Board> {
    return this.boardService.update(param);
  }

  @Get('delete')
  delete(@Query() param: Board): Promise<Board> {
    return this.boardService.delete(param);
  }

  @Get('findone')
  findOne(@Query() param: Board): Promise<Board> {
    return this.boardService.findOne(param);
  }
}
