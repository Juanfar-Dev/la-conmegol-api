import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { PlayerModule } from './modules/player/player.module';
import { TournamentModule } from './modules/tournament/tournament.module';

@Module({
  imports: [PrismaModule, PlayerModule, TournamentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
