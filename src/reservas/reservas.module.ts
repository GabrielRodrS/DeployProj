import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './reservas.entity';
import { ReservaService } from './reservas.service';
import { ReservaController } from './reservas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva], 'Reservas')],
  providers: [ReservaService],
  controllers: [ReservaController],
  exports: [TypeOrmModule],
})
export class ReservaModule {}
