import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const configTypeORM: TypeOrmModuleOptions = {
type: 'mysql', // or 'mysql', 'sqlite', etc.
      host: process.env['HOST_DATABASE'],
      port: parseInt(process.env['PORT_DATABASE'] || '3306'),
      username: process.env['USERNAME_DATABASE'],
      password: process.env['PASSWORD_DATABASE'],
      database: process.env['NAME_DATABASE'],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
}