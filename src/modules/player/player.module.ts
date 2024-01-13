import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/player/player.controller';
import { PlayerService } from './services/player/player.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService],
  imports: [PrismaModule],
})
export class PlayerModule {}
