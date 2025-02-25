import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuario/usuarios.module';
import { ReservaModule } from './reservas/reservas.module';
import { Usuario } from './usuario/usuarios.entity';
import { Reserva } from './reservas/reservas.entity';
import { NotificacaoModule } from './notif/notif.module';
import { Notificacao } from './notif/notif.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'usuarios.db',
      entities: [Usuario],
      synchronize: true,
      name: 'Usuarios',
    }),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'novasreservas.db',
      entities: [Reserva],
      synchronize: true,
      name: 'Reservas',
    }),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'notificacoes.db',
      entities: [Notificacao],
      synchronize: true,
      name: 'Notificacoes',
    }),

    UsuariosModule,
    ReservaModule,
    NotificacaoModule,
  ],
})
export class AppModule {}
