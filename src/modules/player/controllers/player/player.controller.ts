import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Version,
} from '@nestjs/common';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '@prisma/client';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Version('1')
  @Get()
  getAllPlayers() {
    return this.playerService.getAllPlayers();
  }

  @Version('1')
  @Get(':id')
  async getPlayerByID(@Param('id') id: string) {
    return this.playerService.getPlayerByID(Number(id));
  }

  @Version('1')
  @Post()
  async createPlayer(@Body() data: Player) {
    return this.playerService.createPlayer(data);
  }

  @Version('1')
  @Put(':id')
  async updatePlayers(@Param('id') id: string, @Body() data: Player) {
    return this.playerService.updatePlayers(Number(id), data);
  }

  @Version('1')
  @Delete(':id')
  async deletePlayer(@Param('id') id: string) {
    return this.playerService.deletePlayer(Number(id));
  }
}
