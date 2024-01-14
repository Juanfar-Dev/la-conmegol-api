import { Injectable } from '@nestjs/common';
import { Tournament } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class TournamentService {
  constructor(private prisma: PrismaService) {}

  async getAllTournaments(): Promise<Tournament[]> {
    return this.prisma.tournament.findMany();
  }

  async getTournamentByID(id: number): Promise<Tournament> {
    return this.prisma.tournament.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createTournament(data: Tournament): Promise<Tournament> {
    return this.prisma.tournament.create({
      data,
    });
  }

  async updateTournaments(id: number, data: Tournament): Promise<Tournament> {
    return this.prisma.tournament.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteTournament(id: number): Promise<Tournament> {
    return this.prisma.tournament.delete({
      where: {
        id,
      },
    });
  }
}
