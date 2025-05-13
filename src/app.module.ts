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
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join('/data', 'usuarios.db'),
      entities: [Usuario],
      synchronize: true,
      name: 'Usuarios', // nome da conexão
    }),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join('/data', 'novasreservas.db'),
      entities: [Reserva],
      synchronize: true,
      name: 'Reservas', // nome da conexão
    }),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join('/data', 'notificacoes.db'),
      entities: [Notificacao],
      synchronize: true,
      name: 'Notificacoes', // nome da conexão
    }),

    // Adicionar as entidades com suas conexões apropriadas
    TypeOrmModule.forFeature([Usuario], 'Usuarios'),
    TypeOrmModule.forFeature([Reserva], 'Reservas'),
    TypeOrmModule.forFeature([Notificacao], 'Notificacoes'),

    UsuariosModule,
    ReservaModule,
    NotificacaoModule,
  ],
})
export class AppModule {}
