import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuario/usuarios.module';
import { ReservaModule } from './reservas/reservas.module';
import { Usuario } from './usuario/usuarios.entity';
import { Reserva } from './reservas/reservas.entity';
import { NotificacaoModule } from './notif/notif.module';
import { Notificacao } from './notif/notif.entity';
import { join } from 'path';

@Module({
  imports: [
    // Configuração da conexão de 'Usuarios'
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'data', 'usuarios.db'), // Usando um caminho relativo
      entities: [Usuario],
      synchronize: true,
      name: 'Usuarios', // Nome da conexão
    }),

    // Configuração da conexão de 'Reservas'
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'data', 'novasreservas.db'), // Usando um caminho relativo
      entities: [Reserva],
      synchronize: true,
      name: 'Reservas', // Nome da conexão
    }),

    // Configuração da conexão de 'Notificações'
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'data', 'notificacoes.db'), // Usando um caminho relativo
      entities: [Notificacao],
      synchronize: true,
      name: 'Notificacoes', // Nome da conexão
    }),

    // Utilizando TypeOrmModule.forFeature para entidades de cada módulo com a respectiva conexão
    TypeOrmModule.forFeature([Usuario], 'Usuarios'),
    TypeOrmModule.forFeature([Reserva], 'Reservas'),
    TypeOrmModule.forFeature([Notificacao], 'Notificacoes'),

    // Módulos específicos do NestJS
    UsuariosModule,
    ReservaModule,
    NotificacaoModule,
  ],
})
export class AppModule {}
