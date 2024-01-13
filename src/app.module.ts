import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { PlayerModule } from './modules/player/player.module';

@Module({
  imports: [PrismaModule, PlayerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
