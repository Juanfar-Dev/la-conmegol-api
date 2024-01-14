import { Module } from '@nestjs/common';
import { TournamentController } from './controllers/tournament/tournament.controller';
import { TournamentService } from './services/tournament/tournament.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService],
  imports: [PrismaModule],
})
export class TournamentModule {}
