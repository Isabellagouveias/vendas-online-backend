import { UserModule } from './user.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [UserService],
})
export class AppModule {}
