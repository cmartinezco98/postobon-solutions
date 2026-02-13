import { Module } from '@nestjs/common';
// Configuraciones
import { ConfigModule} from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true ,     
      // envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`, 
})],
  controllers: [],
  providers: [],
})
export class AppModule {}
