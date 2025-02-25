import { Controller, Post, Body } from '@nestjs/common';
import { PixService } from './pix.service';

@Controller('pix')
export class PixController {
  constructor(private readonly pixService: PixService) {}

  @Post('pagar')
  async pagarPix(
    @Body()
    {
      chave,
      valor,
      descricao,
    }: {
      chave: string;
      valor: number;
      descricao?: string;
    },
  ) {
    return this.pixService.pagarPorChavePix(chave, valor, descricao);
  }
}
