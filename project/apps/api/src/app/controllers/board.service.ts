import { Injectable } from '@nestjs/common';
import { AbstractRDBMSService } from '../database/abstract.service';
import { Boards } from '../entities';
import { Board } from '../interface/board.interface';

@Injectable()
export class BoardService extends AbstractRDBMSService<Board> {
  constructor() {
    super(Boards.name);
  }
}
