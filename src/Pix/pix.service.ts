import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';
import { Agent } from 'https';

@Injectable()
export class PixService {
  private readonly clientId = 'SEU_CLIENT_ID';
  private readonly clientSecret = 'SEU_CLIENT_SECRET';
  private readonly certificado = 'caminho/do/certificado.pem';
  private readonly baseUrl = 'https://api.gerencianet.com.br/v1';

  private async autenticar() {
    const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString(
      'base64',
    );

    const response = await axios.post(
      'https://api.gerencianet.com.br/v1/authorize',
      {},
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
        httpsAgent: new Agent({
          cert: fs.readFileSync(this.certificado),
          rejectUnauthorized: false,
        }),
      },
    );

    return response.data.access_token;
  }

  async pagarPorChavePix(chave: string, valor: number, descricao?: string) {
    const token = await this.autenticar();

    const body = {
      valor: valor.toFixed(2),
      pagador: { chave },
      descricao: descricao || 'Pagamento via Pix',
    };

    const response = await axios.post(`${this.baseUrl}/pix/pay`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      httpsAgent: new Agent({
        cert: fs.readFileSync(this.certificado),
        rejectUnauthorized: false,
      }),
    });

    return response.data;
  }
}
