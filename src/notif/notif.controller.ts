import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NotificacaoService } from './notif.service';
import { Notificacao } from './notif.entity';

@Controller('notificacoes')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  @Post()
  async create(
    @Body()
    notificacaoData: {
      data: string;
      horario: string;
      verif: boolean;
      userEmail: string;
    },
  ): Promise<Notificacao> {
    return this.notificacaoService.create(notificacaoData);
  }

  @Get('mostrar')
  async findLastFive(@Param('email') email: string): Promise<Notificacao[]> {
    return this.notificacaoService.findLastFiveByEmail(email);
  }
}
