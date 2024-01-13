import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '@prisma/client';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getAllPlayers() {
    return this.playerService.getAllPlayers();
  }

  @Get(':id')
  async getPlayerByID(@Param('id') id: string) {
    return this.playerService.getPlayerByID(Number(id));
  }

  @Post()
  async createPlayer(@Body() data: Player) {
    return this.playerService.createPlayer(data);
  }

  @Put(':id')
  async updatePlayers(@Param('id') id: string, @Body() data: Player) {
    return this.playerService.updatePlayers(Number(id), data);
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: string) {
    return this.playerService.deletePlayer(Number(id));
  }
}
