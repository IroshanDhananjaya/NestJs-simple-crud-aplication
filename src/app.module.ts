import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/user';
import { UserModule } from './user/user.module';
import { Profile } from './typeorm/entities/profile';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nestjs_mysql',
      entities: [User, Profile],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
