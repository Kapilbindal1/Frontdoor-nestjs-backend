import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersHistoryModule } from './userHistory/user-history.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://shiva-kaushik:shiva-kaushik@cluster0.czabgwp.mongodb.net/Frontdoor-DB?retryWrites=true&w=majority',
    ),
    UsersModule,
    UsersHistoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
