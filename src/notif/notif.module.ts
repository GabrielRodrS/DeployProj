import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notificacao } from './notif.entity';
import { NotificacaoService } from './notif.service';
import { NotificacaoController } from './notif.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Notificacao], 'Notificacoes')],
  controllers: [NotificacaoController],
  providers: [NotificacaoService],
  exports: [TypeOrmModule],
})
export class NotificacaoModule {}
