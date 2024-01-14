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
import { TournamentService } from '../../services/tournament/tournament.service';
import { Tournament } from '@prisma/client';

@Controller('tournaments')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Version('1')
  @Get()
  getAllTournaments() {
    return this.tournamentService.getAllTournaments();
  }

  @Version('1')
  @Get(':id')
  async getTournamentByID(@Param('id') id: string) {
    return this.tournamentService.getTournamentByID(Number(id));
  }

  @Version('1')
  @Post()
  async createTournament(@Body() data: Tournament) {
    return this.tournamentService.createTournament(data);
  }

  @Version('1')
  @Put(':id')
  async updateTournaments(@Param('id') id: string, @Body() data: Tournament) {
    return this.tournamentService.updateTournaments(Number(id), data);
  }

  @Version('1')
  @Delete(':id')
  async deleteTournament(@Param('id') id: string) {
    return this.tournamentService.deleteTournament(Number(id));
  }
}
