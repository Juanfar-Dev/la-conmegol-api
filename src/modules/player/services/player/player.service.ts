import { Injectable } from '@nestjs/common';
import { Player } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async getAllPlayers(): Promise<Player[]> {
    return this.prisma.player.findMany();
  }

  async getPlayerByID(id: number): Promise<Player> {
    return this.prisma.player.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createPlayer(data: Player): Promise<Player> {
    return this.prisma.player.create({
      data,
    });
  }

  async updatePlayers(id: number, data: Player): Promise<Player> {
    return this.prisma.player.update({
      where: {
        id,
      },
      data,
    });
  }

  async deletePlayer(id: number): Promise<Player> {
    return this.prisma.player.delete({
      where: {
        id,
      },
    });
  }
}
